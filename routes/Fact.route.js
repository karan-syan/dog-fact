import express from "express";
import FactController from "../controllers/Fact.controller.js";

const router = express.Router();

router.get("/", FactController.getDogFacts);

export default router;
