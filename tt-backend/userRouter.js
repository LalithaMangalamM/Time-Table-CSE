const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt")
const Faculty = require('./userSchema'); // Import the Login model or schema

router.get("/",(request, response) => {
  response.send("HOME PAGE:)")
})

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
        return res.status(200).send("Successfully signed in");
} 
    catch (error) {
        return res.status(500).send(error);
    }
});


router.post("/insert",  async (request, response) => {
  let body = request.body;
      let newFaculty = new Faculty({
          name : body.name,
        email : body.email,
          password : body.password
      });
      await newFaculty.save();
      response.json("Expense created");
  

})



module.exports = router;
