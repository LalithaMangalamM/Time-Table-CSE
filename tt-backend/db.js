const mongoose = require("mongoose");
require("dotenv").config();

//db connectivity
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to db🔥");
}).catch((error) =>{
    console.log("Error while connecting😕" + error);
})