export function deepClone(obj, newObj) {
    var newObj = newObj || {}
    for (var i in obj) {
        if (typeof obj[i] === 'object') {
            console.log('需要深拷贝')
            if (obj[i].contructor === Array) {
                newObj[i] = []
            } else {
                newObj[i] = {}
            }
            //newObj[i]=(obj[i].contructor===Array)?[]:{}
            deepClone(obj[i], newObj[i])
        } else {
            newObj[i] = obj[i];
        }
    }
    return newObj;
}