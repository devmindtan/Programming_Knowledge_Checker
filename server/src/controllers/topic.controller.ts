import { Request, Response } from "express";
import { Topic } from "../models/topic.schema";

export const topicController = async (req: Request, res: Response) => {
  try {
    const data = await Topic.find({});
    if (data.length == 0) {
      res.json({
        message: "Không có dữ liệu nào",
      });
    }
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
