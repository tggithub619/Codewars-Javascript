//https://www.codewars.com/kata/51675d17e0c1bed195000001

function solution(digits) {
    console.log(digits)
    let res = 0;
    for (let i = 0; i < digits.length; i++) {
        let number = digits.substr(i, 5);
        if (Number(number) > res) {
            res = Number(number);
        }
    }
    return res;
}

function solution(digits){
    let s = [];
    for (var i = 0; i < digits.length - 4; i++){
        s.push(digits.substr(i,5));
    };
    return Math.max(...s);
}