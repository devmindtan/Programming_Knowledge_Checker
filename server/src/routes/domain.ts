import express from "express";
import { getAllDomains, getDomainById } from "../controllers/domain.controller";

const router = express.Router();

router.get("/get-all-domains", getAllDomains);
router.get("/get-domain/:id", getDomainById);

export default router;
