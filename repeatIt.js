//https://www.codewars.com/kata/557af9418895e44de7000053/train/javascript

var repeatIt = function(str, n) {
    return (typeof str === 'string') ? str.repeat(n): "Not a string"
}

var repeatIt = function(str, n) {
    let res = ''
    let i = 1
    while (i<=n){
        if (typeof(str) === "string"){
            res += str;
            i++
        }
    }
    return res
}