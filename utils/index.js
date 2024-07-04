/**
 * 生成指定区间内的一个随机整数数组，可任意指定长度
 */
export function generateRandomIntArray(length, min = 300, max = 600) {
  if (length <= 0 || !Number.isInteger(length)) {
    throw new Error("参数length的长度不能为0，且必须为整数");
  }
  const array = [];
  for (let i = 0; i < length; i++) {
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    array.push(randomNum);
  }
  return array;
}
/**
 * 生成指定区间内的一个随机整数
 */
export function generateRandomNum(min = 30, max = 90, isInt = true) {
  let randomNum;
  if (min > max) {
    [min, max] = [max, min];
  }
  if (!isInt) {
    randomNum = (Math.random() * (max - min)).toFixed(2) + min;
  } else {
    randomNum = Math.floor(Math.random() * (max - min)) + min;
  }

  return randomNum;
}

/**
 * 发送消息的函数
 */
export function senMsg(ws, data) {
  ws.clients.forEach((client) => {
    client.send(data);
  });
}

/**
 * 从数组中得到一个随机的元素
 */
export function getRandomElement(array) {
  if (array.length === 0) {
    throw new Error("数组长度不能为空");
  }
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

/**
 * 精确判断一个数据的类型
 */
export function judgeType(obj) {
  let type = toString.call(obj);
  return type;
}
