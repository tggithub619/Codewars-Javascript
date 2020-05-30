//https://www.codewars.com/kata/576bb71bbbcf0951d5000044/solutions/javascript/me/best_practice


function countPositivesSumNegatives(arr) {
    let count = 0;
    let sum = 0;
    if (arr == null || arr.length == 0 ) return [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0) count++;
        else if (arr[i] < 0) sum += arr[i];
    }
    return [count, sum];
}