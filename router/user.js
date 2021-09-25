const router = require("express").Router();
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../auth/verifyToken");
const { getAllUsers, updateUser, deleteUser, getUser, getUserStats } = require("../controller/userController")

router.put("/:id", verifyTokenAndAuthorization, updateUser )
router.delete("/:id", verifyTokenAndAuthorization, deleteUser)
router.get("/find/:id", verifyTokenAndAdmin ,getUser)
router.get("/", verifyTokenAndAdmin ,getAllUsers)
router.get("/stats", verifyTokenAndAdmin, getUserStats)
module.exports = router