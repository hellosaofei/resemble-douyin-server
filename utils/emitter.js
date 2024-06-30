import { EventEmitter } from "node:events";
class Queue {
  list = null;
  add(item) {
    this.list.push(item);
  }
  remove() {
    this.list.shift();
  }
}
class MyEmitter extends EventEmitter {
  static instance;
  static get Instance() {
    if (!this.instance) {
      this.instance = new MyEmitter();
    }
    return this.instance;
  }
  msgQueue;
}

const myEmitter = new MyEmitter();
myEmitter.on("event", () => {
  console.log("an event occurred!");
});
myEmitter.emit("event");
