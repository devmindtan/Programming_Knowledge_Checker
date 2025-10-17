import { Request, Response } from "express";
import { Domain } from "../models/domain.schema";

export const getAllDomains = async (req: Request, res: Response) => {
  try {
    const data = await Domain.find({});
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
export const getDomainById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await Domain.findById(id);
    if (!data) {
      res.status(404).json({
        message: "Không có dữ liệu nào",
      });
    }
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
