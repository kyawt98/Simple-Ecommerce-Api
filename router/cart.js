const router = require("express").Router();
const { verifyTokenAndAdmin, verifyTokenAndAuthorization } = require("../auth/verifyToken");
const { createCart, updateCart, deleteCart, getCart, getAllCarts } = require("../controller/cartController");

router.post("/", verifyTokenAndAdmin, createCart)
router.put("/:id", verifyTokenAndAuthorization, updateCart )
router.delete("/:id", verifyTokenAndAuthorization, deleteCart)
router.get("/find/:userId", verifyTokenAndAuthorization ,getCart)
router.get("/", verifyTokenAndAdmin ,getAllCarts)
module.exports = router

