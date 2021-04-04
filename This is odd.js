//https://www.codewars.com/kata/554003323fd6af1c4200004e/

function isOdd(n) {
    return Math.abs(n % 2) == 1
}

function isOdd(n) {
    return n % 2 != 0 && !(''+n).includes(".")
}
