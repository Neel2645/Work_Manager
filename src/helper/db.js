import mongoose from "mongoose";

const config = {
  isConnected: 0,
};

export const connectDB = async () => {
  if (config.isConnected) {
    return;
  }
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "Work-Manager-DB",
    });
    console.log("Connected to MongoDB");
    // console.log(connection.host);
    // console.log(connection);
    console.log(connection.readyState);
    config.isConnected = connection.readyState;
  } catch (error) {
    console.log("Failed to connect to MongoDB");
    console.log(error);
  }
};
