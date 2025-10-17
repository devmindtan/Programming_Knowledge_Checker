import { Request, Response } from "express";
import { Dsa } from "../models/dsa.schema";

export const dsaController = async (req: Request, res: Response) => {
  try {
    const data = await Dsa.find({});
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
