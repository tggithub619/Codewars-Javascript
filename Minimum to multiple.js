//https://www.codewars.com/kata/5e030f77cec18900322c535d/solutions/javascript

function minimum(a, x) {
    return Math.min(a % x, x - a % x)
}

function minimum(a, x){
    for (let i = 0; i < x; i++) {
        if ((a - i) % x === 0 || (a + i) % x === 0) {
            return i;
        }
    }
}
