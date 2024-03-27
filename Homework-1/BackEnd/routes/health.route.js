import { Router } from "express";
import * as Health from "../controllers/health.controller.js";

const router = Router();

router.get("/", Health.health);

export { router };
