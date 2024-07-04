import express from "express";
import { createServer } from "http";

import { createSocketServer } from "./service/websocket_service.js";

const app = express();

const httpServer = createServer(app);

createSocketServer(httpServer);

httpServer.listen("3002", () => {
  console.log("服务已经启动，3002...");
});
