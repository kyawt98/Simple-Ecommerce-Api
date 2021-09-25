const router = require("express").Router()
const { createPayment } = require("../controller/stripeController")

router.post("/payment", createPayment)
module.exports = router