const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt")
const Login = require('./userSchema'); // Import the Login model or schema

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);
        const user =  await Login.findOne(email);
        if (!user) {
            return res.status(401).json({ message: 'Authentication failed' });
          }
          const match = await bcrypt.compare(password,Login.password);
          if(!match)
          {
            return res.status(401).json({message: 'Authentication failed password'})
          }
        return res.status(200).send("Successfully signed in");
} 
    catch (error) {
        return res.status(500).send("An error occurred");
    }
});

module.exports = router;
