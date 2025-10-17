import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./configs/connect.db";

import testControllerApi from "./routes/test.api";
import getAllDsaRoute from "./routes/dsa.api";
import getAllDomainsRoute from "./routes/domain";
import getDomainRoute from "./routes/domain";
import getAllProficienyLevelsRoute from "./routes/proficiency_level.api";
import getAllTopicRoute from "./routes/topic.api";
import createTopicRoute from "./routes/topic.api";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/test", testControllerApi);
app.use("/api", getAllDsaRoute);
app.use("/api", getAllDomainsRoute);
app.use("/api", getDomainRoute);
app.use("/api", getAllProficienyLevelsRoute);
app.use("/api", getAllTopicRoute);
app.use("/api", createTopicRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
