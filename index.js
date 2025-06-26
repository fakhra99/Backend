import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from "./controller/userController.js";

// Load environment variables FIRST
dotenv.config();

// Express setup
const app = express();

// MongoDB connection
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api", userRoutes);

// Server start
const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});