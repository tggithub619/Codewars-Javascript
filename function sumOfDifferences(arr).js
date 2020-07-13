//https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript
//For example: sumOfDifferences([2, 1, 10]) Returns 9
//
// Descending order: [10, 2, 1]
//
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

function sumOfDifferences(arr) {
    arr.sort((a,b) => b-a);
    let first = arr[0];
    let second = arr.length-1;
    for( let i =1; i<arr.length; i++){
        first = first - arr[i];
        break;
    }
    for( let i =arr.length-2; i>0; i--){
        second = arr[i] - arr[arr.length-1];
    }
    return first + second;
}

console.log(sumOfDifferences([1, 2, 10]));