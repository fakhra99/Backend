import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import router from './routes/userRoutes.js'

// Load environment variables FIRST
dotenv.config();

// Express setup
const app = express();

// MongoDB connection
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/", router);

// Server start
const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});