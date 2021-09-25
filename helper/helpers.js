const CryptoJS = require("crypto-js");

const Encrypt_Pass = (password) => {
   return CryptoJS.AES.encrypt(password, process.env.SECRET_CODE).toString()
}
 
const Decrypt_Pass = (password) => {
    return CryptoJS.AES.decrypt(password, process.env.SECRET_CODE)
 }
module.exports = { Encrypt_Pass, Decrypt_Pass }
