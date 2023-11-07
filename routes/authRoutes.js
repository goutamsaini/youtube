const express = require('express');
// const { JsonWebTokenError } = require('jsonwebtoken');

const authRouter = express.Router();

const jwt = require('jsonwebtoken');
const User = require("../models/userSchema")
// const obj = {

// }
// const token = jwt.sign

authRouter.post("/signup", async(req,res) => {
    const data =req.body;
    const token =jwt.sign(data,"mysecretkey");
      const newUser = new User(req.body);
    await  newUser.save();

    res.send({
        sucess: true,
        token:"someToken"
    });
    
});

authRouter.post("/login", async(req,res) => {
    const data =req.body;
    console.log(req.body);
    const email = data.email;
    const password = data.password;
    const user = await User.findOne(
        {email:email,}
    );
    const token =jwt.sign(data,"mysecretkey");
      const newUser = new User(req.body);
    await  newUser.save();

    res.send({
        sucess: true,
        token:"someToken"
    });
    
});
module.exports = authRouter;

