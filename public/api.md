# 前后端数据字段约定

## 前端

- 前端应传递的数据格式

```json
{
  "action": "getData",
  "dataType": "orderSourceData",
  "value": ""
}
```

### action

- 表示前端本次发送`message`的目的
- 可选字段
  > - getData：表明前端想要获取数据

### dataType

- 表示前端想要请求的数据是哪个部分
- 可选字段

> - ordrSourceData
> - popularityTrendData
> - transactionTrendData
> - userPortraitData
> - liveInfoData
> - dataPanelData
> - productListData

## 后端

- 后端应传递的数据格式

```json
{
  "dataType": "orderSourceData",
  "data": {}
}
```

### dataType

- 表明数据是哪一部分
- 可选字段（同上）

#### transactionTrendData

- 交易趋势

```js
const res = {
  dataType: "transactionTrendData",
  data: {
    timeAxis: [],
    transitionNumGoods: 0,
    transitionNumPeople: 0,
  },
};
```

#### PopularityTrendData

- 人气趋势

```js
const res = {
  dataType: "PopularityTrend",
  data: {
    timeAxis: [],
    enterNum: [],
    leaveNum: [],
    aliveNum: [],
  },
};
```

#### orderSourceData

- 订单来源

```js
const res = {
  dataType: "orderSourceData",
  data: [
    { value: 1048, name: "Search Engine" },
    { value: 735, name: "Direct" },
    { value: 580, name: "Email" },
    { value: 484, name: "Union Ads" },
    { value: 300, name: "Video Ads" },
  ],
};
```

#### liveInfoData

- 直播详情

```js
const res = {
  dataType: "liveInfoData",
  data: {
    author: {
      name: "@小哈哈~~~",
      avatar: "",
      liveStatus: "已关播",
    },
    liveStartAt: "2023/03/12",
    liveDuration: "5小时43分钟",
    livePlatform: "抖音",
  },
};
```

#### dataPanelData

- 数据面板

```js
const res = {
  dataType: "dataPanelData",
  data: {
    summaryMoney: 0,
    transitionNumGoods: 0,
    transitionNumPeople: 0,
    conversionRate: 0,
    moneyOfThousandViews: 0,
    fansRate: 0,
    averageAliveNum: 0,
    totalViewNum: 0,
    incrementFans: 0,
    incrementFansOfGroup: 0,
    averageDuration: 0,
  },
};
```

#### productListData

- 商品列表

```js
const res = {
  dataType: "productListData",
  data: {
    tableData: [
      {
        good: "hahha",
        name: "花草小号散箱花草小号散箱花草小号散箱",
        accessNumber: 23413,
        dealNum: 23414,
        dealFund: "￥8,212,213",
        realDeal: "32,389",
        payRate: "32.8%",
        store: "32,131",
      },
    ],
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
```

### data

- 针对某个图表，后端向前端返回的具体的数据
