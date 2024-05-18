import mongoose from "mongoose";

const schema=new mongoose.Schema({
    name:String,
    email:String,
    rating:Number,
    review:String
})

export const Review=mongoose.model("review",schema)