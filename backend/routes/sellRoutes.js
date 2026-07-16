import express from "express";
import {
  createSellRequest,
  getSellRequests,
} from "../controllers/sellController.js";

const router = express.Router();

router.post("/", createSellRequest);
router.get("/", getSellRequests);

export default router;