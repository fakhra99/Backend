// 
import dotenv from 'dotenv'
import mongoose from "mongoose";

dotenv.config();

const mongoDB_URI = process.env.URI
export const connectDB = async () =>{
    await mongoose.connect(mongoDB_URI)
    console.log("connected to db");   
}