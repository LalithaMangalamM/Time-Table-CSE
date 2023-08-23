let express  = require("express");
let mongoose = require("mongoose")
let cors = require("cors")
require("dotenv").config();
require("./db");
let app =  express()
let router = require("./routes/userRouter");
const bodyParser = require("body-parser");
const PORT = 5000

//middlewares

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(cors())
app.use(router);

//server connectivity
app.listen(PORT , ()=>{
    console.log("Server is running🔥😎");
})