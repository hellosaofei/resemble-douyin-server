import express from "express";
import { createServer } from "http";
import { WebSocketServer } from "ws";

const app = express();

const httpServer = createServer(app);

app.get("/home", (req, res) => {
  res.send("hello");
});

const wss = new WebSocketServer({
  server: httpServer,
});

// wss.on("connection", (client) => {
//   console.log("客户端链接成功");
//   client.on("message", (msg) => {
//     console.log("客户端发送的数据是：", msg.toString());
//     client.send(msg);
//   });
// });

// 出现错误
wss.on("error", console.error);

// 建立连接
wss.on("open", function open() {
  ws.send("something");
});
// 收到消息
wss.on("message", function message(data) {
  wss.clients.forEach((client) => {});
  console.log("received: %s", data);
});

httpServer.listen("3002", () => {
  console.log("服务已经启动，3002...");
});
