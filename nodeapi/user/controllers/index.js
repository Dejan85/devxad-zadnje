const User = require("../../auth/models");
const _ = require("lodash");
const fs = require("fs");
const formidable = require("formidable");

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
  console.log(req.profile);
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};

//
// ─── UPDATE USER ────────────────────────────────────────────────────────────────
//

// update user
exports.updateUser = (req, res, next) => {
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
      // console.log("user after update with formdata: ", user);
      res.json(user);
    });
  });
};
