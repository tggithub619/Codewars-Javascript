//https://www.codewars.com/kata/55b1e5c4cbe09e46b3000034/train/javascript

function isPronic(n){
    for (let i = 0; i <= n; i++) {
        if (n === i * (i + 1)) return true
    }
    return false
}