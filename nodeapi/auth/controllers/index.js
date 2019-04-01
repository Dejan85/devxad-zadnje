const jwt = require("jsonwebtoken");
const User = require("../models");
const _ = require("lodash");
require("dotenv").config();

//
// ─── USER REGISTRATION ──────────────────────────────────────────────────────────
//

exports.userRegister = async (req, res) => {
  const userExists = await User.findOne({ email: req.body.email });
  if (userExists) {
    return res.status(403).json({ error: "Email is taken!" });
  }
  const user = await new User(req.body);
  await user.save();
  res.status(200).json({ message: "Signup success!" });
};

//
// ─── USER LOGIN ─────────────────────────────────────────────────────────────────
//

exports.userLogin = (req, res) => {
  // find the user based on email
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    // if err or no user
    if (err || !user) {
      return res.status(401).json({
        error: "User with that email does not exist. Please signup."
      });
    }
    // if user is found make sure the email and password match
    // create authenticate method in model and use here
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Email and password do not match"
      });
    }
    // generate a token with user id and secret
    const token = jwt.sign(
      // { _id: user._id, role: user.role },
      {
        _id: user._id,
        name: user.name,
        lastname: user.lastname,
        email: user.email
        // role: user.role
      },
      process.env.JWT_SECRET
    );

    // persist the token as 't' in cookie with expiry date
    res.cookie("t", token, { expire: new Date() + 9999 });
    // retrun response with user and token to frontend client
    // const { _id, name, email, role } = user;
    return res.json({
      token: "Bearer " + token,
      // user: { _id, email, name, role },
      message: "Login success!"
    });
  });
};

//
// ─── USER LOGOUT ────────────────────────────────────────────────────────────────
//

exports.userLogout = (req, res) => {
  res.clearCookie("t");
  return res.json({ message: "Signout success!" });
};
