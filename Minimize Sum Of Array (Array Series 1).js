//https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/javascript

function minSum(arr) {
    let arr1 = arr.sort((a,b) => a-b)
    let sum = 0;
    let lastI = arr.length - 1;
    for (let i = 0; i < arr.length / 2; i++) {
        sum += arr[i] * arr[lastI];
        lastI--;
    }
    return sum;
}

function minSum(arr) {
    let sum = 0;
    arr.sort((a,b) => a-b);
    for (let i = 0; i < arr.length/2; i++){
        sum += arr[i] * arr[arr.length-1-i];
    }
    return sum;
}
