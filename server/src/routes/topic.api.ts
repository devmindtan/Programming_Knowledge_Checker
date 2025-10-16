import express from "express";
import { topicController } from "../controllers/topic.controller";

const router = express.Router();

router.get("/get-all-topics", topicController);

export default router;
