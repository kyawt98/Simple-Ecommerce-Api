const User = require("../models/User")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")
const { Encrypt_Pass, Decrypt_Pass } = require("../helper/helpers");

// REGISTER
const register = async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: Encrypt_Pass(req.body.password),
    });

    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
    
}

// LOGIN
const login = async ( req, res ) => {
    try {
        const user = await User.findOne({
            username: req.body.username,
        })
        !user && res.status(401).json("username or password is invalid")

        const hashedPassword = Decrypt_Pass(user.password)
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)

        OriginalPassword !== req.body.password &&
            res.status(401).json("username or password is invalid")
        
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        }, process.env.JWT_SECRET_CODE, { expiresIn: "3d" })
        
        const { password, ...others } = user._doc;

        res.status(200).json({...others, accessToken})
    } catch (err) {
        res.status(401).json("Something wrong!")
    }
}

module.exports = { register, login }