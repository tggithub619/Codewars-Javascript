//https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript

function countBy(x, n) {
    var arr = [];
    for (let i = 1; i <= n * x; i++) {
        if (i % x === 0) arr.push(i);
    }
        return arr;
    }