const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const dotenv = require("dotenv");
dotenv.config();

const User = require("../models/UserModel.js")

const router = express.Router();


// User SignUp
router.post("/signup", async (request, response) => {

  try {
    const { username, firstname, lastname, password } = request.body;

    const isExistingUser = await User.findOne({ username: username });
    if (isExistingUser) {
      return response.status(400).json({ message: "User already exists." });
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const user = new User({
      username,
      firstname,
      lastname,
      password: hashedPassword,
    });

    console.log(`The user is ${user}`)
  
    await user.save();
  
    const token = jwt.sign({ id: user._id }, process.env.JWT_KEY, { expiresIn: "1d", });
  
    return response.json({
      user, token, message: "Sign Up Successful",
    });

  } catch (error) {
    console.log(error)
    return response.status(500).json({ message: "Server Error", error: error.message});
  }

});


// User Login
router.post("/login", async (request, response) => {

  try {
    const { username, password } = request.body;

    const user = await User.findOne({ username: username});
    if (!user) {
      return response.status(401).json({ message: "User does not exist" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return response.status(401).json({ message: "Incorrect Password"});
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_KEY, { expiresIn: "1d", });
  
    return response.json({
      username, token, message: "Login Successful",
    });

  } catch (error){
    console.log(error)
    return response.status(500).json({ message: "Server Error", error: error.message});
  }

});

  
module.exports = router;