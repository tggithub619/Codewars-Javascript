//https://www.codewars.com/kata/5844a422cbd2279a0c000281

function multi(arr) {
    return arr.reduce((a,b) => a*b,1);
}
function add(arr) {
    return arr.reduce((a,b) => a+b,0)
}
function reverse(str) {
    return str.split('').reverse().join('')
}