const express = require('express');
const { authenticateJWT } = require("../middleware/middleware")
const router = express.Router();
const{
    getCall,
    list,
    login,
    insert,
    profile
} = require("../controllers/controller")

//get call
router.get("/",getCall)

//display api
router.get("/list",list)


//login api
router.post('/login',login );

//insert data
router.post("/insert", insert);

//profile data
router.get("/profile", authenticateJWT, profile);



module.exports = router;
