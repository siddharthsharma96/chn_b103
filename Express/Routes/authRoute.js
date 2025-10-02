const express = require("express");
const authController = require("./../Controller/authController");
const router = express.Router();

router.post("/login", authController.login);
router.post("/signup", authController.singUp);
router.get("/", authController.allUser);
module.exports = router;
