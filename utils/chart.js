import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/Line";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend"
import "echarts/lib/component/title";
import 'echarts/lib/component/dataset'
import {
    setExtend
} from "./extend";
chart.prototype.settings = function (arg) {
    //设置常用的几个属性

}

function chart() {

}
chart.prototype.draw = function (options) {
    this.chart.setOption(options || this.options);
};
chart.prototype.importData = function (columns, rows) {
    this.options.dataset.dimensions = columns;
    this.options.dataset.source = rows
};
export function barChart(el, width, height) {
    chart.call(this);
    this.el = document.getElementById(el);
    this.width = width || "400px";
    this.height = height || "600px";
    this.el.style.width = this.width;
    this.el.style.height = this.height;
    this.chart = echarts.init(this.el);

    this.data = {};
    this.options = {
        title: {
            text: "ECharts 入门示例"
        },
        xAxis: {
            type: 'category'
        },
        tooltip: {},
        dataset: {
            dimensions: [],
            source: []
        },
        legend: {},
        yAxis: {},
        series: [{
                type: 'bar',
                itemStyle: {
                    color: 'yellow'
                }

            },
            {
                type: 'bar',
                itemStyle: {
                    color: '#456789'
                }
            }
        ]
    };
}
barChart.prototype = new chart();
barChart.prototype.constructor = barChart;

barChart.prototype.extend = function (options) {
    setExtend(this.options, options);
};