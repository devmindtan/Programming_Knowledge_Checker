import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./configs/connect.db";

import testControllerApi from "./routes/test.api";
import dsaControllerApi from "./routes/dsa.api";
import topicControllerApi from "./routes/topic.api";
import prociencyControllerApi from "./routes/proficiency_level.api";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/test", testControllerApi);
app.use("/api", dsaControllerApi);
app.use("/api", topicControllerApi);
app.use("/api", prociencyControllerApi);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
