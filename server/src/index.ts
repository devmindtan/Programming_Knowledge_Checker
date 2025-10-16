import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import testControllerApi from "./routes/test.api";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", testControllerApi);

// MongoDB connection (optional)
const MONGO_URI = process.env.MONGO_URI;
if (MONGO_URI) {
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("MongoDB connected ✅"))
    .catch((err) => console.error("MongoDB error:", err));
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
