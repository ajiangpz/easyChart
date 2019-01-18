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
window.onload = function () {
    let myBar = new barChart('bar', '600px', '600px');
    myBar.importData(['name', 'value', 'age'], getData())
    myBar.extend({
        series: {
            label: {
                show: true,
                position: "top"
            }
        }
    })
    myBar.settings({
        barGap: '-100%',
        opacity: 0.5
    })
    myBar.draw()
}