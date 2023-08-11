let express  = require("express");
let mongoose = require("mongoose")
let cors = require("cors")
let app =  express()
 let router = require("./userRouter.js");
const bodyParser = require("body-parser");
const PORT = 5000
//middlewares

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(cors())
 app.use(router);

mongoose.connect("mongodb+srv://lalli155003:lalitha2003@cluster0.b7blbpd.mongodb.net/TimeTable?retryWrites=true&w=majority", {
    useUnifiedTopology: true, 
    useNewUrlParser: true,
}).then(() => {
    console.log("Connected to DB");
})
app.listen(PORT , ()=>{
    console.log("Server is running🔥😎");
})