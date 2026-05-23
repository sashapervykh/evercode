import express from "express";
import { startScheduler } from "./controllers/scheduler.controller.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express + TypeScript");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

startScheduler();
