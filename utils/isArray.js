var str = Object.prototype.toString;
export function isArray(val) {
    return !!val && '[object Array]' == str.call(val)
}