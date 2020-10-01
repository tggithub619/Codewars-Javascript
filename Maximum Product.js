//https://www.codewars.com/kata/5a4138acf28b82aa43000117/solutions/javascript/me/best_practice

function adjacentElementsProduct(array) {
    let arr = [];
    for(i=0; i < array.length -1; i++) {
        arr.push(array[i] * array[i+1])}
    return Math.max(...arr);
}
