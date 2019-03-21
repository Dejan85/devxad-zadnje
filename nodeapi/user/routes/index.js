const express = require("express");
const router = express.Router();

// controllers
const { userById, getUser } = require("../controllers");

// authorization
const { requireSignin } = require("../authorization");

router.get("/user/:userId", requireSignin, getUser);

// any route containing :userId, our app will first execute userById()
router.param("userId", userById);

module.exports = router;
