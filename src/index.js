import {
    barChart
} from '../utils/chart.js'

function getData() {
    console.log('可以用函数获取')
    return [{
        'name': '小明',
        'value': 89,
        'age': 23
    }, {
        'name': '小红',
        'value': 93,
        'age': 25
    }, {
        'name': '小黄',
        'value': 83,
        'age': 18
    }, {
        'name': '小何',
        'value': 85,
        'age': 23
    }]
}
let columns = ['日期', '访问用户', '下单用户', '下单率']
let rows = [{
        '日期': '1/1',
        '访问用户': 1393,
        '下单用户': 1093,
        '下单率': 0.32
    },
    {
        '日期': '1/2',
        '访问用户': 3530,
        '下单用户': 3230,
        '下单率': 0.26
    },
    {
        '日期': '1/3',
        '访问用户': 2923,
        '下单用户': 2623,
        '下单率': 0.76
    },
    {
        '日期': '1/4',
        '访问用户': 1723,
        '下单用户': 1423,
        '下单率': 0.49
    },
    {
        '日期': '1/5',
        '访问用户': 3792,
        '下单用户': 3492,
        '下单率': 0.323
    },
    {
        '日期': '1/6',
        '访问用户': 4593,
        '下单用户': 4293,
        '下单率': 0.78
    }
]
let settings = {
    barGap: '100%',
    opacity: 0.5
}
let extend = {
    series: {
        label: {
            show: true,
            position: "top"
        }
    }
}
window.onload = function () {
    new barChart({
        el: 'bar',
        columns: columns,
        rows: rows,
        dataZoom: [{
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            start: 1,
            end: 35
        }],
        extend: extend,
        settings: settings
    });
}