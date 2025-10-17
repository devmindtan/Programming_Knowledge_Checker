import { Request, Response } from "express";
import { ProficiencyLevel } from "../models/proficiency-level.schema";

export const proficiencyLevelController = async (
  req: Request,
  res: Response
) => {
  try {
    const data = await ProficiencyLevel.find({});
    if (data.length == 0) {
      res.json({
        message: "Không có dữ liệu nào",
        data: [],
      });
    }
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
