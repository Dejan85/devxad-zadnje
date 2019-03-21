const User = require("../../auth/models");
const _ = require("lodash");

//
// ─── GET USER BY ID ─────────────────────────────────────────────────────────────
//

exports.userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err) {
      res.status(400).json({
        error: "User not found"
      });
    }
    req.profile = user; // adds profile object in req with user info
    next();
  });
};

//
// ─── GET USER ───────────────────────────────────────────────────────────────────
//

exports.getUser = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};
