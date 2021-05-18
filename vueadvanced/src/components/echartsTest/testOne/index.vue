<template>
  <div id="testOne">
    <p style="font-size: 20px">{{ msg }}</p>
    <div id="one" v-show="false"></div>
    <div id="two" v-show="false"></div>
    <div id="thre"></div>
    <div id="four"></div>
    <div id="five"></div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data() {
    return {
      msg: "这是一个Echarts练习",
      // oneArr: [],
      oneArr: [this.randata(10), this.randata(4), this.randata(8)],
      twoArr: [],
      threArr: [],
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
          //数据可以进行复用
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
      five: {
        // animation: false,
        legend: {
          data: ["scatter", "scatter2", "scatter3"],
        },
        tooltip: {},
        xAxis: {
          type: "value",
          min: "dataMin",
          max: "dataMax",
          splitLine: {
            show: true,
          },
        },
        yAxis: {
          type: "value",
          min: "dataMin",
          max: "dataMax",
          splitLine: {
            show: true,
          },
        },
        dataZoom: [
          {
            type: "slider",
            show: true,
            xAxisIndex: [0],
            start: 1,
            end: 35,
          },
          {
            type: "slider",
            show: true,
            yAxisIndex: [0],
            left: "93%",
            start: 29,
            end: 36,
          },
          {
            type: "inside",
            xAxisIndex: [0],
            start: 1,
            end: 35,
          },
          {
            type: "inside",
            yAxisIndex: [0],
            start: 29,
            end: 36,
          },
        ],
        series: [
          {
            name: "scatter",
            type: "scatter",
            itemStyle: {
              normal: {
                opacity: 0.8,
              },
            },
            symbolSize: function (val) {
              return val[2] * 40;
            },
            data: [
              ["14.616", "7.241", "0.896"],
              ["3.958", "5.701", "0.955"],
              ["2.768", "8.971", "0.669"],
              ["9.051", "9.710", "0.171"],
              ["14.046", "4.182", "0.536"],
              ["12.295", "1.429", "0.962"],
              ["4.417", "8.167", "0.113"],
              ["0.492", "4.771", "0.785"],
              ["7.632", "2.605", "0.645"],
              ["14.242", "5.042", "0.368"],
            ],
          },
          {
            name: "scatter2",
            type: "scatter",
            itemStyle: {
              normal: {
                opacity: 0.8,
              },
            },
            symbolSize: function (val) {
              return val[2] * 40;
            },
            data: [
              ["6.376", "8.120", "3.601"],
              ["15.218", "2.256", "0.735"],
              ["1.921", "9.434", "0.295"],
              ["4.177", "0.786", "3.006"],
              ["6.281", "1.999", "3.795"],
              ["7.496", "5.947", "0.182"],
              ["15.876", "4.968", "2.466"],
              ["6.650", "3.071", "1.483"],
              ["3.310", "4.977", "2.487"],
              ["3.384", "8.739", "1.515"],
              ["1.539", "8.969", "1.164"],
              ["3.236", "2.566", "3.023"],
              ["6.491", "2.875", "0.746"],
              ["2.737", "2.736", "0.714"],
              ["7.015", "7.734", "3.404"],
              ["4.062", "7.327", "0.642"],
              ["6.859", "0.262", "1.211"],
              ["7.007", "2.016", "2.453"],
              ["17.229", "2.121", "1.010"],
              ["14.736", "2.432", "2.931"],
              ["4.401", "0.418", "0.624"],
              ["10.977", "7.110", "1.978"],
              ["4.132", "8.400", "3.700"],
              ["17.489", "2.124", "2.710"],
              ["6.829", "3.977", "0.031"],
              ["8.466", "5.854", "0.949"],
              ["4.073", "9.769", "2.118"],
              ["2.143", "7.266", "3.844"],
            ],
          },
          {
            name: "scatter3",
            type: "scatter",
            itemStyle: {
              normal: {
                opacity: 0.8,
              },
            },
            symbolSize: function (val) {
              return val[2] * 40;
            },
            data: [
              ["7.283", "9.746", "3.440"],
              ["7.074", "7.508", "2.070"],
              ["5.993", "3.454", "4.823"],
              ["2.321", "8.650", "1.220"],
              ["13.514", "3.638", "4.489"],
              ["17.099", "5.296", "3.527"],
              ["13.969", "7.461", "4.012"],
              ["11.814", "9.902", "1.297"],
              ["12.876", "6.918", "2.209"],
              ["18.021", "8.624", "1.404"],
              ["3.686", "1.789", "2.691"],
              ["16.012", "3.008", "0.038"],
              ["6.355", "9.728", "4.821"],
              ["7.487", "0.274", "3.075"],
              ["12.443", "1.246", "3.780"],
              ["13.753", "7.168", "0.686"],
              ["10.036", "7.131", "3.996"],
              ["2.727", "5.504", "3.370"],
              ["4.973", "3.792", "2.636"],
              ["5.230", "4.964", "0.461"],
              ["0.976", "8.949", "4.845"],
              ["8.589", "6.957", "2.996"],
              ["5.073", "3.916", "2.103"],
              ["18.725", "3.170", "2.985"],
              ["15.659", "6.965", "0.318"],
              ["18.510", "7.750", "4.613"],
              ["0.417", "2.674", "3.462"],
              ["11.324", "4.605", "1.736"],
              ["3.373", "0.033", "2.842"],
              ["17.464", "2.241", "2.882"],
              ["5.855", "4.551", "2.003"],
              ["12.625", "6.305", "2.282"],
              ["8.864", "6.161", "3.810"],
              ["10.986", "6.458", "0.647"],
              ["7.312", "2.567", "2.731"],
              ["0.851", "7.466", "2.890"],
              ["4.550", "3.702", "1.423"],
              ["5.873", "4.174", "2.224"],
              ["5.453", "4.518", "0.489"],
              ["14.328", "5.574", "1.395"],
              ["4.269", "3.746", "4.377"],
              ["2.441", "1.625", "2.342"],
              ["0.038", "1.990", "1.570"],
              ["19.990", "5.771", "1.761"],
              ["4.890", "8.581", "0.614"],
              ["12.080", "1.858", "3.494"],
              ["17.777", "7.898", "1.205"],
              ["19.756", "8.907", "2.771"],
              ["4.063", "9.216", "2.814"],
              ["10.096", "3.359", "0.351"],
              ["11.505", "3.313", "4.124"],
              ["14.661", "6.907", "1.638"],
              ["0.786", "6.195", "3.840"],
              ["16.781", "0.450", "4.407"],
              ["12.043", "1.265", "0.899"],
              ["10.707", "6.970", "0.819"],
              ["3.187", "4.559", "0.936"],
              ["0.929", "1.694", "0.970"],
              ["0.154", "8.751", "2.516"],
              ["17.648", "8.040", "1.593"],
              ["19.528", "7.222", "4.300"],
              ["18.236", "9.120", "3.912"],
              ["4.058", "6.248", "2.087"],
              ["6.820", "9.816", "2.469"],
              ["1.465", "3.412", "2.554"],
              ["10.153", "8.307", "3.273"],
              ["19.125", "8.150", "4.365"],
              ["4.905", "5.186", "0.606"],
              ["5.879", "8.631", "4.959"],
              ["18.981", "7.073", "0.509"],
              ["6.794", "0.664", "1.952"],
            ],
          },
        ],
      },
    };
  },
  beforeMount() {
    this.initData();
  },
  mounted() {
    // this.initE();
    // this.getDom('one').showLoading()
    this.init("one", this.one);
    this.init("two", this.two);
    this.init("thre", this.thre);
    this.init("four", this.four);
    this.fiveInit();

    /* mockjs 模拟数据 */
    // axios.post('localhost:5253/goods/goodAll').then((res)=>{
    //   console.log('mock数据',res.data);
    // })

    // this.init("five", this.five);
    // this.initData();

    // document.write(this.twoArr)
  },

  methods: {
    getDom(name) {
      return this.$echarts.init(document.getElementById(name));
    },
    init(dom, data) {
      this.getDom(dom).setOption(data);
    },
    randata(num) {
      return (Math.random() * num).toFixed(3);
    },
    initData() {
      for (let i = 0; i <= 500; i++) {
        this.oneArr.push([this.randata(10), this.randata(4), this.randata(8)]);
        this.twoArr.push([this.randata(20), this.randata(10), this.randata(5)]);
        this.threArr.push([
          this.randata(16),
          this.randata(10),
          this.randata(7),
        ]);
      }
    },
    fiveInit() {
      let fives = this.$echarts.init(document.getElementById("five"));
      fives.setOption({
        legend: {
          data: ["scatter", "scatter2", "scatter3"],
        },
        tooltip: {},
        xAxis: {
          type: "value",
          min: "dataMin",
          max: "dataMax",
          splitLine: {
            show: true,
          },
        },
        yAxis: {
          type: "value",
          min: "dataMin",
          max: "dataMax",
          splitLine: {
            show: true,
          },
        },
        dataZoom: [
          {
            type: "slider",
            show: true,
            xAxisIndex: [0],
            start: 1,
            end: 35,
          },
          {
            type: "slider",
            show: true,
            yAxisIndex: [0],
            left: "93%",
            start: 29,
            end: 36,
          },
          {
            type: "inside",
            xAxisIndex: [0],
            start: 1,
            end: 35,
          },
          {
            type: "inside",
            yAxisIndex: [0],
            start: 29,
            end: 36,
          },
        ],
        series: [
          {
            name: "scatter",
            type: "scatter",
            itemStyle: {
              normal: {
                opacity: 0.8,
              },
            },
            symbolSize: function (val) {
              // console.log('图形大小',val);
              return val[2] * 10;
            },
            data: this.oneArr,
          },
          {
            name: "scatter2",
            type: "scatter",
            itemStyle: {
              normal: {
                opacity: 0.8,
              },
            },
            symbolSize: function (val) {
              return val[2] * 10;
            },
            data: this.twoArr,
          },
          {
            name: "scatter3",
            type: "scatter",
            itemStyle: {
              normal: {
                opacity: 0.8,
              },
            },
            symbolSize: function (val) {
              return val[2] * 10;
            },
            data: this.threArr,
          },
        ],
      });
    },
  },
};
</script>
<style lang='scss' src='./index.scss' scoped></style>