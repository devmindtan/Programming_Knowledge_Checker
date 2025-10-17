import { Request, Response } from "express";
import { Test } from "../models/test.schema";

export const testController = async (req: Request, res: Response) => {
  try {
    // Lấy dữ liệu từ collection "tests"
    const data = await Test.find({});
    if (data.length == 0) {
      res.json({
        message: "Không có dữ liệu nào",
        data: [],
      });
    }
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
