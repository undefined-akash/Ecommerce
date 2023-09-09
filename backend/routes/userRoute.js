const express =require("express");
const {registerUser,loginUser, logout,getUserDetails, forgotPassword,updatePassword, updateProfile}= require("../controllers/userController")
const router=express.Router();
const { isAuthenticatedUser} = require("../middleware/auth");

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").get(logout)


router.route("/password/forgot").post(forgotPassword);

router.route("/me/update").put(isAuthenticatedUser, updateProfile);

router.route("/password/update").put(isAuthenticatedUser, updatePassword);





router.route("/me").get(isAuthenticatedUser,getUserDetails);
module.exports=router;