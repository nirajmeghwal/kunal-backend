import mongoose from "mongoose";

const schema=new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    date:Date,
    doctor:String
})

export const User=mongoose.model("user",schema);