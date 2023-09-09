const express= require("express");
const { getAllProducts,createProduct, updateProduct,deleteProduct, getProductDetails, createProductReview, getProductReviews, deleteReview} = require("../controllers/productController");
const {isAuthenticatedUser}=require("../middleware/auth")
const router=express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/new").post(isAuthenticatedUser,createProduct);
router.route("/product/:id").put(isAuthenticatedUser,updateProduct).delete(isAuthenticatedUser,deleteProduct).get(getProductDetails);


// Review Routes
router.route("/review").put(isAuthenticatedUser, createProductReview);
router.put("/review", isAuthenticatedUser,createProductReview);
router.route("/reviews").get(getProductReviews).delete(isAuthenticatedUser, deleteReview);
module.exports=router