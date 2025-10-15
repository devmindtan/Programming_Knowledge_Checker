import express from "express";
import { testController } from "../controllers/user.controller";

const router = express.Router();

const testControllerApi = router.get("/", testController);

export { testControllerApi };
