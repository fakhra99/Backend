// schema is just the design of your mongodb documents 
// we plan what we have to include 
import mongoose from "mongoose";

const userSchema = new  mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('user', userSchema);
export default User;