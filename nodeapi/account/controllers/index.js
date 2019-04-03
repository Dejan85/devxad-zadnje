const User = require("../../auth/models");
const _ = require("lodash");
const fs = require("fs");
const formidable = require("formidable");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//
// ─── GET USER BY ID ─────────────────────────────────────────────────────────────
//

exports.accountById = (req, res, next, id) => {
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

exports.getAccount = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};

//
// ─── UPDATE USER ────────────────────────────────────────────────────────────────
//

// update user
exports.updateAccount = (req, res, next) => {
  let form = new formidable.IncomingForm();
  // console.log("incoming form data: ", form);
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Photo could not be uploaded"
      });
    }
    // save user
    let user = req.profile;
    // console.log("user in update: ", user);
    user = _.extend(user, fields);

    user.updated = Date.now();
    // console.log("USER FORM DATA UPDATE: ", user);

    if (files.photo) {
      user.photo.data = fs.readFileSync(files.photo.path);
      user.photo.contentType = files.photo.type;
    }

    user.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err
        });
      }
      user.hashed_password = undefined;
      user.salt = undefined;
      user.photo = undefined;

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

      // console.log("user after update with formdata: ", user);
      res.json({ token, message: "User update succesfuly!" });
    });
  });
};

//
// ─── USER PHOTO ─────────────────────────────────────────────────────────────────
//

exports.accountPhoto = (req, res, next) => {
  if (req.profile.photo.data) {
    res.set(("Content-Type", req.profile.photo.contentType));
    return res.send(req.profile.photo.data);
  }
  next();
};

//
// ─── DELETE USER ────────────────────────────────────────────────────────────────
//

exports.deleteAccount = (req, res, next) => {
  let user = req.profile;
  user.remove((err, user) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.json({ message: "User deleted successfully" });
  });
};
