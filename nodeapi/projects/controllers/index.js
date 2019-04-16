const Projects = require("../models");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");





//
// ─── CREATE PROJECT ─────────────────────────────────────────────────────────────
//

exports.createProject = (req, res) => {
  let form = new formidable.IncomingForm();
  form.multiples = true;
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Photos could not be uploaded"
      });
    }

    let project = new Projects(fields);

    // req.profile.hashed_password = undefined;
    // req.profile.salt = undefined;
    project.postedBy = req.profile

    if (files.photo) {
      projectMessage.photo.data = fs.readFileSync(files.photo.path)
      project.photo.contentType = files.photo.type
    }



    project.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err
        })
      }
      res.json(result)
    })
  });
};

//
// ─── GET ALL PROJECT ───────────────────────────────────────────────────────────────────
//

exports.getAllProjects = (req, res) => {
  Projects.find()
    .populate("postedBy", "_id name")
    .select("_id name title category description photo postedBy created")
    .then((project) => {
      res.json({ project })
    }).catch((err) => {
      console.log(err);
    })
};

//
// ─── GET PROJECT BY ID ──────────────────────────────────────────────────────────
//

exports.getProjectById = (req, res) => {
  const id = req.params.id;
  Projects.findById(id, (err, project) => {
    if (err) {
      return res.status(400).json({
        err
      });
    } else {
      return res.status(200).json({
        project
      });
    }
  });
};



//
// ─── EDIT PROJECT BY ID ─────────────────────────────────────────────────────────
//

exports.editProject = (req, res) => {
  const id = req.params.id;
  Projects.findById(id, (err, project) => {
    project.name = req.body.name;
    project.title = req.body.title;
    project.category = req.body.category;
    project.description = req.body.description;

    project.save((err, project) => {
      if (err) {
        return res.status(400).json({
          errr
        });
      } else {
        return res.status(200).json({
          message: "Project updated successfully",
          project
        });
      }
    });
  });
};

//
// ─── DELETE PROJECT BY ID ───────────────────────────────────────────────────────
//

exports.deleteProjects = (req, res) => {
  Projects.findByIdAndRemove(req.params.id, err => {
    if (err) {
      return res.status(400).json({
        err
      });
    } else {
      return res.status(200).json({
        message: "Project deleted successfully"
      });
    }
  });
};
