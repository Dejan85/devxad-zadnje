const express = require("express");
const router = express.Router();

// controllers
const { userRegister, userLogin, userLogout } = require("../controllers");

// validators
const { userRegisterValidator, userLoginValidator } = require("../validator");

router.post("/signup", userRegisterValidator, userRegister);
router.post("/login", userLoginValidator, userLogin);
router.get("/logout", userLogout);

module.exports = router;
