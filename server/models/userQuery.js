import mongoose from "mongoose";

const userQuesry = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    projectType:{
        type:String,
        required:true
    },
    budget:{
        type:String,
        required:true
    },
    projectDescription:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["pending","solved","rejected"],
        default:"pending"
    }
},{Timestamp:true});

const UserQuery = mongoose.model("UserQuery",userQuesry);

export default UserQuery;