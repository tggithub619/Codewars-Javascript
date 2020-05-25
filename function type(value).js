//https://www.codewars.com/kata/57293671c98f77e84b000065/solutions/javascript

function type(value) {
    if (value instanceof Array) return 'array'
    if (value instanceof Date) return 'date'
    if (value === null) return 'null'
    if (value instanceof Object) return 'object'
    return typeof value
}