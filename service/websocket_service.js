import { WebSocketServer } from "ws";

import { getCurType, generateData } from "../api/index.js";
// 导入数据
import * as Data from "../data/index.js";

export function createSocketServer(server) {
  let interval = null;
  let messageList = [];
  let maxSize = 3;
  const wss = new WebSocketServer({
    server: server,
  });
  wss.on("connection", (client) => {
    console.log("客户端链接成功");
    //连接成功后，对该客户端进行message事件监听
    client.on("message", (msg) => {
      // console.log("客户端发送的数据是：", JSON.parse(msg));
      let payload = JSON.parse(msg);
      const { action, dataType } = payload;
      if (action === "getData") {
        client.send(JSON.stringify(Data[dataType]));
      }
    });
  });
  interval = setInterval(() => {
    const type = getCurType();
    messageList.push(generateData(type));
    //监听List数组长度变化，如果达到阈值就使用socket发送数据
    if (messageList.length > maxSize) {
      while (messageList.length > 0) {
        let message = messageList.shift();
        wss.clients.forEach((client) => {
          client.send(JSON.stringify(message));
        });
      }
    }
  }, 1000);
  wss.on("close", function close() {
    clearInterval(interval);
  });
}
