const router = require("express").Router();
const { verifyTokenAndAdmin } = require("../auth/verifyToken");
const { createProduct, updateProduct, deleteProduct, getProduct, getAllProducts } = require("../controller/productController");

router.post("/", verifyTokenAndAdmin, createProduct)
router.put("/:id", verifyTokenAndAdmin, updateProduct )
router.delete("/:id", verifyTokenAndAdmin, deleteProduct)
router.get("/find/:id", verifyTokenAndAdmin ,getProduct)
router.get("/", verifyTokenAndAdmin ,getAllProducts)
module.exports = router

