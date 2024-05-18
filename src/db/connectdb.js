import mongoose from "mongoose"

const connectDB=async()=>{
    try {
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
       if(connectionInstance)console.log("MONGODB CONNECTED");
    } catch (error) {
        console.log(error);
    }
}
export default connectDB