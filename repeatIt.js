//https://www.codewars.com/kata/557af9418895e44de7000053/train/javascript

var repeatIt = function(str, n) {
    return (typeof str === 'string') ? str.repeat(n): "Not a string"
}