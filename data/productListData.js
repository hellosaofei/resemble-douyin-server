const productItem = {
  name: "花草小号散箱花草小号散箱花草小号散箱",
  accessNumber: 23413,
  dealNum: 23414,
  dealFund: "￥8,212,213",
  realDeal: "32,389",
  payRate: "32.8%",
};

function generateList() {
  const productList = [];
  for (let i = 0; i < 20; i++) {
    productList.push(productItem);
  }
  return productList;
}
export default {
  dataType: "productListData",
  data: {
    tableData: generateList(),
    labelData: [
      "商品名",
      "商品点击人数",
      "成交件数",
      "成交金额",
      "成交订单量",
      "订单付款率",
    ],
  },
};
