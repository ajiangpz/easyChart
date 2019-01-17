import {
    set
} from './set.js'

import {
    isObject
} from './isObject.js'
console.log(Object.prototype.toString.call(isObject))
export function setExtend(options, extend) {
    Object.keys(extend).forEach((attr) => {
        const value = extend[attr]
        if (~attr.indexOf('.')) {
            //eg a.b.c
            set(options, attr, value)
        } else if (typeof value === 'function') {
            options[attr] = value(options[attr])
        } else {
            if (Array.isArray(options[attr]) && isObject(options[attr][0])) {
                //[{},{}]
                options[attr].forEach((option, index) => {
                    options[attr][index] = Object.assign({}, option, value)
                })
            } else if (isObject(options[attr])) {
                options[attr] = Object.assign({}, options[attr], value)
            } else {
                options[attr] = value
            }
        }
    })
}