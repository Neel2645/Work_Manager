import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        const {connection} = await mongoose.connect(process.env.MONGO_URI, {
            dbName:"Work-Manager-DB"
        });
        console.log("Connected to MongoDB");
        console.log(connection.host); 

        // console.log(connection);
    }catch(error){
        console.log("Failed to connect to MongoDB");
        console.log(error);
    }
}