import express from "express";
import { proficiencyLevelController } from "../controllers/proficiency-level.controller";

const router = express.Router();

router.get("/get-all-proficiency-levels", proficiencyLevelController);

export default router;
