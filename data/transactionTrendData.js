import { generateRandomIntArray } from "../utils/index.js";
export const timeAxis = [
  "11:15",
  "12:30",
  "13:45",
  "15:00",
  "16:15",
  "17:30",
  "18:45",
  "20:00",
  "21:15",
  "22:30",
  "23:45",
];
export default {
  dataType: "transactionTrendData",
  data: {
    timeAxis,
    transitionNumGoods: generateRandomIntArray(timeAxis.length),
    transitionNumPeople: generateRandomIntArray(timeAxis.length),
  },
};
