const express = require('express')
let app =  express();
const mongoose = require("mongoose")
const cors = require('cors')
let Login = require('./userSchema')
const loginRouter = require('./userRouter');

app.use(cors())
app.use(express.json());
app.use(loginRouter);

mongoose.connect("mongodb://localhost:27017/TimeTable").then(()=>{
    console.log("connected to db")
})
app.listen(5000,()=>{
    console.log("port:5000")
})
