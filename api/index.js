import { dataPanelData, orderSourceData } from "../data/index.js";
import {
  generateRandomIntArray,
  getRandomElement,
  generateRandomNum,
} from "../utils/index.js";
import { timeAxis } from "../data/PopularityTrendData.js";

var sumMoney = 4633;
/**
 * 改变PanelData
 */
// function changePanelData(obj) {
//   Object.keys(obj).forEach((key) => {
//     if (Math.random() < 0.4) {
//       obj[key] += Math.floor(Math.random() * 100);
//     }
//   });
//   return {
//     dataType: "dataPanelData",
//     data: obj,
//   };
// }
function changePanelData() {
  sumMoney += Math.floor(Math.random() * 100) + 89;
  return {
    dataType: "dataPanelData",
    data: {
      summaryMoney: sumMoney,
      transitionNumGoods: generateRandomNum(),
      transitionNumPeople: generateRandomNum(),
      conversionRate: generateRandomNum(3, 9, false),
      moneyOfThousandViews: generateRandomNum(983, 2022),
      fansRate: generateRandomNum(3, 9, false),
      averageAliveNum: generateRandomNum(),
      totalViewNum: generateRandomNum(3, 9, false),
      incrementFans: generateRandomNum(),
      incrementFansOfGroup: generateRandomNum(),
      averageDuration: generateRandomNum(10, 60),
    },
  };
}
/**
 * 改变SourceData
 */
function changeSourceData() {
  return {
    dataType: "orderSourceData",
    data: [
      { value: generateRandomNum(), name: "直播推荐" },
      { value: generateRandomNum(), name: "抖音商城" },
      { value: generateRandomNum(), name: "其他" },
      { value: generateRandomNum(), name: "关注" },
    ],
  };
}
/**
 * 改变popularityData
 */
function changePopularityData() {
  return {
    dataType: "PopularityData",
    data: {
      timeAxis: timeAxis,
      enterNum: generateRandomIntArray(timeAxis.length),
      leaveNum: generateRandomIntArray(timeAxis.length),
      aliveNum: generateRandomIntArray(timeAxis.length),
    },
  };
}
/**
 * 改变 transitionData
 */
function changeTransitionData() {
  return {
    dataType: "transactionTrendData",
    data: {
      timeAxis: timeAxis,
      transitionNumGoods: generateRandomIntArray(timeAxis.length),
      transitionNumPeople: generateRandomIntArray(timeAxis.length),
    },
  };
}

/**
 * 改变 transitionData
 */
function generatePortraitData() {
  const manPercent = generateRandomNum();
  return {
    dataType: "userPortraitData",
    data: [
      {
        name: "男性",
        value: manPercent,
      },
      {
        name: "女性",
        value: 100 - manPercent,
      },
    ],
  };
}
/**
 * 用于返回一个指定的类型
 */
export function getCurType() {
  const typeList = [
    "dataPanelData",
    "orderSourceData",
    "PopularityData",
    "transactionTrendData",
    "portraitData",
  ];
  return getRandomElement(typeList);
}
/**
 * 用于对某一种类型的数据进行处理
 */
export function generateData(type) {
  switch (type) {
    case "dataPanelData":
      return changePanelData(dataPanelData.data);
    case "orderSourceData":
      return changeSourceData();
    case "PopularityData":
      return changePopularityData();
    case "transactionTrendData":
      return changeTransitionData();
    case "portraitData":
      return generatePortraitData();
    default:
      return changePanelData(dataPanelData.data);
  }
}
