import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectToDatabase = async () => {
  const MONGO_URI = process.env.MONGODB_URI;
  // Replace with your MongoDB URI

  try {
    // Connect to MongoDB
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process with a failure code
  }
};

export default connectToDatabase;
