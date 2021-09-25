const express = require("express");
const app = express();
const PORT = process.env.PORT || 5800
const userRouter = require("./router/user")
const authRouter = require("./auth/auth")
const productRouter = require("./router/product")
const cartRouter = require("./router/cart")
const orderRouter = require("./router/order")

const connectDB = require("./config/db")

connectDB()
app.use(express.json())

app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)
app.use("/api/products", productRouter)
app.use("/api/carts", cartRouter)
app.use("/api/orders", orderRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})