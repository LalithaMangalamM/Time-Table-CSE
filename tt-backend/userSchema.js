let mongoose = require("mongoose")
let uslogin = new mongoose.Schema({
    email:{type:String},
    password:{type:String}
})
const Login = mongoose.model('login', uslogin)
module.exports=Login