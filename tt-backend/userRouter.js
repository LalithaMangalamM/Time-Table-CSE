const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt")
const Faculty = require('./userSchema'); 
const nodemailer = require('nodemailer');

//get call
router.get("/",(request, response) => {
  response.send("HOME PAGE:)")
})


//login api
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        // console.log(email, password);
        const user =  await Faculty.findOne({email});
        console.log(user);
        if (!user) {
            return res.status(401).json({ message: 'Authentication failed' });
          }
          const match =  bcrypt.compare(password,user.password);
          // console.log(match);
          if(!match)
          {
            return res.status(401).json({message: 'Authentication failed password'})
          }
        return res.status(200).json({"role":user.role});
} 
    catch (error) {
        return res.status(500).send(error);
    }
});

//insert data
router.post("/insert",  async (request, response) => {
  let body = request.body;
  const length = 5;
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  // const allChars = upper+lower+number;
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
          role:body.role
      });
      try {
        await newFaculty.save();
        const transporter = nodemailer.createTransport({
          service: 'Gmail', // e.g., 'Gmail', 'Outlook'
          auth: {
            user: 'tablefit.2023@gmail.com',
            pass: 'mnoskauelkkddcgg',
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
        response.json("User created");
      } catch (error) {
        console.error(error);
    response.status(500).json("Error creating user");        
      }
      
  

})



module.exports = router;
