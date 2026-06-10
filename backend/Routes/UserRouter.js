const { register, login } = require("../Controllers/UserController");
const { registerValidation, loginValidation } = require("../Middlewares/UserValidation");

const router = require("express").Router();



//If request is valid then only it execute register
router.post("/register",registerValidation,register);


router.post("/login", loginValidation,login);


module.exports = router;
