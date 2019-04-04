const express = require("express");
const router = express.Router();
const {
  createProject,
  getAllProjects,
  getProjectById,
  editProject,
  deleteProjects
} = require("../controllers");

router.post("/projects/create", createProject);
router.get("/projects/get", getAllProjects);
router.get("/projects/get/:id", getProjectById);
router.put("/projects/update/:id", editProject);
router.delete("/projects/delete/:id", deleteProjects);

module.exports = router;
