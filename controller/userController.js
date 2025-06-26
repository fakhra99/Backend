// Step 1: Import the User model
import User from "../models/userModel.js";
import { Router } from "express";

const router = Router();

// Step 2: Define the controller function as async
router.post("/signup", async (req, res) => {
  try {
    // Step 3: Check if a user already exists with this email
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      // Step 4: Destructure name, email, password from request body
      const { name, email, password } = req.body;

      // Step 5: Create a new user object using the User model
      const newUser = new User({
        name: name,
        email: email,
        password: password
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
});

export default router;