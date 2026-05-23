import { app } from "./app.js";
import { startScheduler } from "./modules/scheduler/scheduler.controller.js";
import { config } from "./config/config.js";

app.listen(config.port, () => {
  console.log(`Server running on PORT=${config.port}`);
});

startScheduler();
