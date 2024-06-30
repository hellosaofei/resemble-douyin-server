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
