import express from "express";
export const app = express();
import { statusRouter } from "./modules/status/status.router.js";

app.use(express.json());

app.use("/status", statusRouter);
