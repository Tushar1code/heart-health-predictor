

// export default router;
import express from "express";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import cors from "cors";  


const router = express.Router();


router.use(cors());  

// Signup route
router.post("/signup", async (req, res) => {
  console.log("Received data:", req.body);  // Log the incoming request body

  const { username, email, password, confirmPassword } = req.body;

  // Validate required fields
  if (!username || !email || !password || !confirmPassword) {
    console.log("Validation error: All fields are required");
    return res.status(400).json({ message: "All fields are required" });
  }

  // Validate matching passwords
  if (password !== confirmPassword) {
    console.log("Validation error: Passwords do not match");
    return res.status(400).json({ message: "Passwords do not match" });
  }

  // Additional logging for received data
  console.log("username:", username);
  console.log("email:", email);
  console.log("password:", password);
  console.log("confirmPassword:", confirmPassword);

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("Validation error: User already exists");
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // Send response with token and user name
    res.status(201).json({ token, name: user.username });
  } catch (error) {
    console.error("Server error:", error);  
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Login route 
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({ token, name: user.username });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;

