const express = require("express");
const router = express.Router();

// controllers
const {
  userById,
  getUser,
  updateUser,
  deleteUser,
  userPhoto
} = require("../controllers");

// authorization
const { requireSignin } = require("../authorization");

router.get("/user/:userId", getUser);
router.put("/user/:userId", updateUser);
router.get("/user/photo/:userId", userPhoto);
router.get("/user/:userId", deleteUser);
router.delete("/user/:userId", deleteUser);

// any route containing :userId, our app will first execute userById()
router.param("userId", userById);

module.exports = router;
