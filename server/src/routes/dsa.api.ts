import express from "express";
import { dsaController } from "../controllers/dsa.controller";

const router = express.Router();

router.get("/get-all-dsas", dsaController);

export default router;
