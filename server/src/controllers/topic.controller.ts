import { Request, Response } from "express";
import { Topic } from "../models/topic.schema";

export const getAllTopics = async (req: Request, res: Response) => {
  try {
    const data = await Topic.find({});
    if (data.length == 0) {
      res.json({
        message: "Không có dữ liệu nào",
        data: [],
      });
    }
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
export const createTopic = async (req: Request, res: Response) => {
  try {
    const { name, dsaId, levelId, tier } = req.body;
    if (!name || !dsaId || !levelId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const existing = await Topic.findOne({ name: req.body.name });
    if (existing) {
      return res.status(400).json({ message: "Topic name already exists" });
    }

    const newTopic = await Topic.create({
      name,
      dsaId,
      levelId,
      tier: tier || "basic",
    });

    res.status(200).json(newTopic);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
