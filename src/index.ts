import express from "express";
import { startScheduler } from "./modules/scheduler/scheduler.controller.js";
import { statusRouter } from "./modules/status/status.router.js";

const app = express();

app.use(express.json());

app.use("/status", statusRouter);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

startScheduler();
