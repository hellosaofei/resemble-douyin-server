const productItem = {
  good: "hahha",
  name: "花草小号散箱花草小号散箱花草小号散箱",
  accessNumber: 23413,
  dealNum: 23414,
  dealFund: "￥8,212,213",
  realDeal: "32,389",
  payRate: "32.8%",
  store: "32,131",
};
const productList = [];
for (let i = 0; i < 20; i++) {
  productList.push(productItem);
}

export default {
  dataType: "productListData",
  data: {
    tableData: productList,
    labelData: [
      "商品",
      "商品名",
      "商品点击人数",
      "成交件数",
      "成交金额",
      "成交订单量",
      "订单付款率",
      "实际库存消耗",
    ],
  },
};
