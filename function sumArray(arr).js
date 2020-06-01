//https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

function sumArray(arr) {
    if (arr == null) return 0;
    else if (arr.length <= 1 )return  0;
    let sum = 0;
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return (sum - max - min);
}