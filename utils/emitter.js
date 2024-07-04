import EventEmitter from "node:events";

export class MyListManager extends EventEmitter {
  constructor(maxSize) {
    super();
    this.count = 0;
    this.list = [];
    this.maxSize = maxSize;
    this.lock = false; //锁，用于判断是否能增删列表
    this.generateTrigger();
    // this.listenTrigger();
  }

  // 私有方法，用于生成随机时间并push对象
  generateTrigger() {
    setTimeout(() => {
      this.emit("trigger");
      // 递归调用
      this.pushRandomly();
    }, Math.random() * 5000 + 1000);
  }
  /**
   * 向列表中增加元素
   */
  // listenTrigger(obj) {
  //   this.on("trigger", () => {
  //     // lock=false 表示没有上锁
  //     if (!this.lock) {
  //       this.lock = true;
  //       this.list.push(obj);
  //       this.lock = false;
  //     } else {
  //       console.log("当前不可修改");
  //     }
  //   });
  //   this.isListFull();
  // }
  /**
   * 判断列表是否已经满了
   */
  isListFull() {
    if (this.list.length >= this.maxSize) {
      this.emit("listFull", this.list);
    }
  }
  /**
   * 清空列表
   */

  clearList() {
    console.log("清空list");
    this.list = [];
  }

  onListFull(callback) {
    this.on("listFull", () => {
      callback(this.list);
      this.clearList();
    });
  }
}
