//https://www.codewars.com/kata/576bb71bbbcf0951d5000044

function countPositivesSumNegatives(input) {
    if (input === null || input.length < 1) {
        return [];
    }
    var array = [0, 0];

    for(var i = 0; i < input.length; i++) {
        if(input[i] <= 0) {
            array[1] += input[i];
        } else {
            array[0] += 1;
        }
    }
    return array;
}

//var testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
//     var expected = [10, -65];

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

function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}