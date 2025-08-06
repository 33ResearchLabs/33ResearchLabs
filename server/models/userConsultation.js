import mongoose from "mongoose";

const userConsultation = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["pending","solved","dismissed"],
        default:"pending"
    }
},{Timestamp:true});

const UserConsultation = mongoose.model("UserConsultation",userConsultation);

export default UserConsultation;
