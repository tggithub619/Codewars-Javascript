//https://www.codewars.com/kata/5a090c4e697598d0b9000004/solutions/javascript/me/best_practice

function solve(arr) {
    arr = arr.sort((a, b) => b - a);
    let l = arr.length;
    let arr1 = [];
    for (let i = 0; i < l; i++) {
        arr1.push(arr.shift(i));
        arr1.push(arr.pop(i));
    }
    return arr1.filter(v => v != undefined);
}