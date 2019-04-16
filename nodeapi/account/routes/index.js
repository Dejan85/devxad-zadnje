const express = require("express");
const router = express.Router();

// controllers
const {
  accountById,
  getAccount,
  updateAccount,
  deleteAccount,
  accountPhoto
} = require("../controllers");

// authorization
const { requireSignin } = require("../authorization");


router.get("/user/:accountId", getAccount);
router.put("/user/:accountId", updateAccount);
router.get("/user/photo/:accountId", accountPhoto);
// router.get("/user/:userId", deleteAccount);
router.delete("/user/:accountId", deleteAccount);

// any route containing :userId, our app will first execute userById()
router.param("accountId", accountById);


module.exports = router;
