import express from "express";
import { getAllTopics, createTopic } from "../controllers/topic.controller";

const router = express.Router();

router.get("/get-all-topics", getAllTopics);
router.post("/create-topic", createTopic);

export default router;
