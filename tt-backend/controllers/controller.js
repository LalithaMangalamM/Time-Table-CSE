const bcrypt = require("bcrypt")
const Faculty = require('../userSchema'); 
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
require("dotenv").config();


//get call
const getCall = (request, response) => {
    response.send("HOME PAGE:)")
  }

  //display api

  const list =  async(request,response) => {
    try {
      const fields = ['name','department'];
      const data = await Faculty.find().select(fields)
      response.json(data);      
    } catch (error) {
      response.status(500).json({ message: 'Error retrieving data', error: error.message })
    }
  }

  //login api

  const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user =  await Faculty.findOne({email});
        console.log(user);
        if (!user) {
            return res.status(401).json({ message: 'Authentication failed' });
          }
          const match =  bcrypt.compare(password,user.password);
          if(!match)
          {
            return res.status(401).json({message: 'Authentication failed password'})
          }
          const token = jwt.sign(
            { userId: user._id, email: user.email, role: user.role, name: user.name },
            process.env.JWT_SECRETKEY,
            { expiresIn: '10h' } 
          );
      
          return res.status(200).json({ token, role: user.role });
    }
    catch (error) {
        return res.status(500).send(error);
    }
}

//inser data
const insert =  async (request, response) => {
    let body = request.body;
    const length = 5;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password ="";
    for(var i=0;i<length;i++)
    {
      var randomno = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomno, randomno+1);
    }
      console.log(password);
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password,salt);
  
        let newFaculty = new Faculty({
            name : body.name,
            email : body.email,
            password : hashedPassword,
            role:body.role,
            department:body.department,
            year:body.year,
            classes:[
              {
              class:body.cls,
              subjects:[body.subject]
            }
          ]
        });
        console.log(body.cls,body.subject);
        try {
          await newFaculty.save();
          const transporter = nodemailer.createTransport({
            service: 'Gmail', 
            auth: {
              user: process.env.USER,
              pass: process.env.PASS,
            },
          });
      
          const mailOptions = {
            to: body.email,
            subject: 'Your new account',
            text: `Welcome! Your new account has been created with the following credentials:\nEmail: ${body.email}\nPassword: ${password}.\nDon't share your password with anyone`,
          };
      
          transporter.sendMail(mailOptions, async (error, info) => {
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
          const userData = {
            name: newFaculty.name,
            email: newFaculty.email,
            role: newFaculty.role,
            department: newFaculty.department,
            year: newFaculty.year,
            class: newFaculty.class,
          };
      
          response.json(userData);
          console.log(userData);
        } catch (error) {
          console.error(error);
      response.status(500).json("Error creating user");        
        }
}

const profile = async(request,response) =>{
    const token = request.header('Authorization')?.replace('Bearer ', '');
    console.log(token);
  
    if (!token) {
      return response.status(401).json({ message: 'Missing token' });
    }
  
    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRETKEY); 
      const userData = {
        name: decodedToken.name,
        email: decodedToken.email,
        role: decodedToken.role,
      };
  
      response.status(200).json(userData);
    } catch (error) {
      response.status(401).json({ message: error });
    }
}

module.exports = {
    getCall,
    list,
    login,
    insert,
    profile
}
 