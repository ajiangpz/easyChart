import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/Line";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend"
import "echarts/lib/component/title";
import 'echarts/lib/component/dataset'
import 'echarts/lib/component/dataZoom'
import {
    setExtend
} from "./extend";
import {
    set
} from "./set";
import {
    debounce
} from "./debounce"
//chart是父构造函数，包含一些基本的属性，通用的方法
function chart(arg) {
    const {
        el,
        width = '100%',
        height = '600px'
    } = arg
    this.el = document.getElementById(el);
    let _this = this
    this.el.style.width = width;
    this.el.style.height = height;
    this.chart = echarts.init(this.el);
    window.addEventListener('resize', debounce(function () {
        _this.chart.resize();
    }, 1000))
    this.options = {
        dataset: {
            dimensions: [],
            source: []
        },
        xAxis: {
            type: 'category'
        },
        legend: {},
        yAxis: {},
        series: []
    }

}
chart.prototype.drawChart = function (arg) {
    this.ECHART_SETTINGS = [
        'grid', 'dataZoom', 'visualMap',
        'toolbox', 'title', 'legend',
        'xAxis', 'yAxis', 'radar',
        'tooltip', 'axisPointer', 'brush',
        'geo', 'timeline', 'graphic',
        'series', 'backgroundColor', 'textStyle'
    ]
    const {
        rows,
        columns,
        extend = {}
    } = arg
    this.options.dataset.dimensions = columns;
    this.options.dataset.source = rows;
    setExtend(this.options, extend);
    this.ECHART_SETTINGS.forEach(setting => {
        if (arg[setting]) {
            this.options[setting] = arg[setting]
        }
    })
    this.chart.setOption(this.options);
}
barChart.prototype = Object.create(chart.prototype)
barChart.prototype.constructor = barChart;
//继承:通过 new 一个父构造函数,可以产生一个实例对象，且该对象的__proto__指向构造函数的原型
//如果将此实例对象赋值给子构造函数的原型对象，那么子构造函数就具有了指向父构造函数原型的指针
//就可以顺着原型链实现继承
//但是 new 操作符与call函数会造成两个属性的复制
//因而可以将新建一个空的 var fn=function(){} 并将其 prototype属性指向父构造函数的prototype
//fn.prototype=parent.prototype 然后再让 child.prototype=new fn();
//那么child 的原型会指向 fn的原型，而 fn 的原型指向 parent 的原型
//以上所述，可以用Object.create()来实现....
barChart.prototype.setBarseries = function (settings) {
    const {
        barGap,
        opacity,
        rows,
        columns,
    } = settings
    let series = []
    let seriesTemp = {}
    let metrics = columns.slice(1)
    metrics.forEach(item => {
        seriesTemp[item] = []
    })
    rows.forEach(row => {
        metrics.forEach(item => {
            seriesTemp[item].push(row[item])
        })
    })
    series = Object.keys(seriesTemp).map(item => {
        let seriesItem = {
            name: item,
            type: 'bar'
        }
        if (barGap) {
            seriesItem.barGap = barGap
        }
        if (opacity) {
            set(seriesItem, 'itemStyle.normal.opacity', opacity)
        }
        return seriesItem
    })
    this.options.series = series;
}
export function barChart(arg) {
    chart.call(this, arg);
    this.setBarseries(arg)
    this.drawChart(arg)
}