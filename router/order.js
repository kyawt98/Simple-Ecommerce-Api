const router = require("express").Router();
const { verifyTokenAndAdmin, verifyTokenAndAuthorization } = require("../auth/verifyToken");
const { createOrder, updateOrder, deleteOrder, getOrder, getAllOrders, getIncome } = require("../controller/orderController");

router.post("/", verifyTokenAndAdmin, createOrder)
router.put("/:id", verifyTokenAndAdmin, updateOrder )
router.delete("/:id", verifyTokenAndAdmin, deleteOrder)
router.get("/find/:userId", verifyTokenAndAuthorization ,getOrder)
router.get("/", verifyTokenAndAdmin, getAllOrders)
router.get("/income", verifyTokenAndAdmin, getIncome)
module.exports = router

