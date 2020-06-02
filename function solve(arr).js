//https://www.codewars.com/kata/5a04133e32b8b998dc000089/solutions/javascript/me/best_practice

function solve(arr){
    return arr.filter((el, i) => arr.slice(i + 1).every(x => x < el));
};

function solve(arr){
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] <= arr[j]) count++;
        }
        if (count === 0) temp.push(arr[i]);
    }
    return temp;
};