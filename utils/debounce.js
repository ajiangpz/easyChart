export function debounce(fn, delay) {
    var timer = null
    return function () {
        console.log(+new Date())
        clearTimeout(timer)
        timer = setTimeout(function () {
            fn.call(this)
        }, delay)
        //思路：触发了dobounece函数之后，清除之前的定时器，重新开启一个定时器
        //也就是等待用户最后一个操作结束后 delay 时间内，不执行任何操作，过了这个时间
        //再执行操作
    }
}