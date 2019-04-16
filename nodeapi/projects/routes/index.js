const express = require("express");
const router = express.Router();
const {
  createProject,
  getAllProjects,
  getProjectById,
  editProject,
  deleteProjects
} = require("../controllers");

const { accountById } = require('../../account/controllers/index')
const { postedById } = require("../authorization")

router.post("/projects/create/:accountId", createProject);
router.get("/projects/get", getAllProjects);
router.get("/projects/get/:id", getProjectById);
router.put("/projects/update/:id", editProject);
router.delete("/projects/delete/:postId", deleteProjects);


//any route containing :userId, our app will first execute userById()
router.param("accountId", accountById)
// any route containing :postId, our app will first execute postId()
router.param("postId", postedById);



module.exports = router;
