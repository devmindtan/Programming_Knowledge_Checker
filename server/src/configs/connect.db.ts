import { connect, Error } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "";

const connectDB = async () => {
  try {
    await connect(MONGO_URI, { dbName: "Programming_Knowledge_Tracker" });
    console.log("✅ MongoDB connected");
  } catch (err) {
    if (err instanceof Error.MongooseServerSelectionError) {
      console.error("❌ MongoDB connection error:", err.message);
    }
    process.exit(1);
  }
};

export default connectDB;
