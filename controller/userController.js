// Step 1: Import the User model
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

// Step 2: Define the controller function as async
export const userSignup = async (req, res) => {
  try {
    // Step 3: Check if a user already exists with this email
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      // Step 4: Destructure name, email, password from request body
      const { name, email, password } = req.body;

      // Step: Hash the password
      const hashedPassword = await bcrypt.hash(password, 10); // use await, not callback
      
      const newUser = new User({
        name,
        email,
        password: hashedPassword  // save hashed password
      });      

      // Step 6: Save the new user to the database
      const savedUser = await newUser.save();

      // Step 7: Send success response
      res.status(200).json({ message: "Signup successful", user: savedUser });
    } else {
      // Step 8: If user already exists, send error response
      res.status(400).json({ message: "User already exists" });
    }
  } catch (error) {
    // Step 9: Catch and handle any errors
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

// Login
export const userLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
  
      // Compare input password with hashed password in DB
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
  
      // Generate JWT
      const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
  
      res.status(200).json({ message: "Login successful", token, user });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error: error.message });
    }
  };
  