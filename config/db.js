// 

import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb://localhost:27017/myDB')
    console.log("connected to db");   
}