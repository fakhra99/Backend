import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

const app = express();
connectDB()

dotenv.config();

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})