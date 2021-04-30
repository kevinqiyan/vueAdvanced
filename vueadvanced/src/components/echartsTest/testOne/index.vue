<template>
  <div id="testOne">
    <p style="font-size: 20px">{{ msg }}</p>
    <div id="one" v-show="false"></div>
    <div id="two" v-show="false"></div>
    <div id="thre"></div>
    <div id="four"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "这是一个Echarts练习",
      one: {
        title: {
          text: "在Vue中使用echarts",
          show: false,
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
      two: {
        // backgroundColor: "#2c343c",
        backgroundColor: "white", //全局的背景颜色
        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1],
          },
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            data: [
              { value: 235, name: "视频广告" },
              { value: 274, name: "联盟广告" },
              { value: 310, name: "邮件营销" },
              { value: 335, name: "直接访问" },
              { value: 400, name: "搜索引擎" },
            ],
            roseType: "angle",
            label: {
              normal: {
                textStyle: {
                  color: "rgba(255, 255, 255, 0.3)",
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: "rgba(255, 255, 255, 0.3)",
                },
              },
            },
            itemStyle: {
              //每一个数据的背景颜色-过渡效果
              normal: {
                color: "#c23531",
                // shadowBlur: 200,
                // shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
      thre: {
        legend: {},
        tooltip: {},
        dataset: {
          // 提供一份数据。
          source: [
            ["product", "2015", "2016", "2017"],
            ["Matcha Latte", 43.3, 85.8, 93.7],
            ["Milk Tea", 83.1, 73.4, 55.1],
            ["Cheese Cocoa", 86.4, 65.2, 82.5],
            ["Walnut Brownie", 72.4, 53.9, 39.1],
          ],
        },
        // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
        xAxis: { type: "category" },
        // 声明一个 Y 轴，数值轴。
        yAxis: {},
        // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
        series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
      },
      four: {
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ["product", "2012", "2013", "2014", "2015"],
            ["Matcha Latte", 41.1, 30.4, 65.1, 53.3],
            ["Milk Tea", 86.5, 92.1, 85.7, 83.1],
            ["Cheese Cocoa", 24.1, 67.2, 79.5, 86.4],
          ],
        },
        xAxis: [
          { type: "category", gridIndex: 0 },
          { type: "category", gridIndex: 1 },
        ],
        yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
        grid: [{ bottom: "55%" }, { top: "55%" }],
        series: [
          // These series are in the first grid.
          { type: "bar", seriesLayoutBy: "row" },
          { type: "bar", seriesLayoutBy: "row" },
          { type: "bar", seriesLayoutBy: "row" },
          // These series are in the second grid.
          { type: "bar", xAxisIndex: 1, yAxisIndex: 1 },
          { type: "bar", xAxisIndex: 1, yAxisIndex: 1 },
          { type: "bar", xAxisIndex: 1, yAxisIndex: 1 },
          { type: "bar", xAxisIndex: 1, yAxisIndex: 1 },
        ],
      },
    };
  },
  mounted() {
    // this.initE();
    // this.getDom('one').showLoading()
    this.init("one", this.one);
    this.init("two", this.two);
    this.init("thre", this.thre);
    this.init("four", this.four);
  },
  methods: {
    getDom(name) {
      return this.$echarts.init(document.getElementById(name));
    },
    init(dom, data) {
      this.getDom(dom).setOption(data);
    },
  },
};
</script>
<style lang='scss' src='./index.scss'></style>