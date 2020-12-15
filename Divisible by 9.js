//https://www.codewars.com/kata/5f7b1a82be51af00105c82bd/train/javascript

function divBy9(ns){
    return  ns.split("").reduce((acc, el) => acc + +el, 0) % 9 === 0 ? true: false
}


function divBy9(ns){
    let sum = ns;
    if (ns > 9) {
        sum = ns
            .toString()
            .split('')
            .map(Number)
            .reduce(function (a, b) {
                return a + b;
            }, 0);
    }
    return sum % 9 === 0;
}