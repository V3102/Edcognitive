const express = require("express");
const router =  express.Router();
const controllers = require("../controllers/auth-controllers")
const signupSchema = require("../validators/auth-validator")
const validate = require("../middlewares/validate-middleware")

router.route("/").get(controllers.home);
router.route("/register").post(validate(signupSchema), controllers.register);
router.route("/login").get(controllers.login);  


module.exports = router;