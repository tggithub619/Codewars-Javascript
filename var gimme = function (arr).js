//https://www.codewars.com/kata/545a4c5a61aa4c6916000755/solutions/javascript/me/best_practice

var gimme = function (arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== max && arr[i] !== min){
            return i;}
    }
};