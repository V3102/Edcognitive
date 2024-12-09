const express = require("express");
const router =  express.Router();
const controllers = require("../controllers/auth-controllers")

router.route("/").get(controllers.home);
router.route("/register").get(controllers.register);
router.route("/login").get(controllers.login);  


module.exports = router;