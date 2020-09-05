//https://www.codewars.com/kata/57293671c98f77e84b000065/solutions/javascript

function type(value) {
    if (value instanceof Array) return 'array';
    if (value instanceof Date) return 'date';
    if (value === null) return 'null';
    if (value instanceof Object) return 'object';
    return typeof value;
}

function type(value) {
    if ({}.toString.call(value) === "[object Array]") return 'array';
    if ({}.toString.call(value) === "[object Object]") return 'object';
    if ({}.toString.call(value) === "[object Number]") return 'number';
    if ({}.toString.call(value) === "[object String]") return 'string';
    if ({}.toString.call(value) === "[object Date]") return 'date';
    if ({}.toString.call(value) === "[object Null]") return 'null';
    if ({}.toString.call(value) === "[object Undefined]") return 'undefined';
}

function type(value) {
    let str = {}.toString.call(value);
    let res = '';
    for (let i = 8; i < str.length - 1; i++){
        res = res + str[i];
    }
    return res.toLowerCase();
}
