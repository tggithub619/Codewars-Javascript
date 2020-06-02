//https://www.codewars.com/kata/5a04133e32b8b998dc000089/solutions/javascript/me/best_practice

function solve(arr){
    return arr.filter((el, i) => arr.slice(i + 1).every(x => x < el));
};