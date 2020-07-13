//https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript

function sumOfDifferences(arr) {
    if (arr.length <= 1) return 0;
    if (arr.length === 2) return Math.abs(arr[0])+Math.abs(arr[1]);
    arr.sort((a,b) => b-a);
    let first = arr[0];
    let second = arr.length-1;
    for( let i =1; i<=arr.length; i++){
        first = first - arr[i];
        break;
    }
    for( let i =arr.length-2; i>0; i--){
        second = arr[i] - arr[arr.length-1];
    }
    return first + second;
}

function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

function sumOfDifferences(arr) {
    return arr.sort((a, b) => b - a)
        .map((a, i) => a - arr[i + 1] || 0)
        .reduce((a, b) => a + b, 0);
}

function sumOfDifferences(arr) {
    arr.sort((a, b) => a - b);
    let b = 0;
    for(let a = arr.length - 1; a > 0; a--) {
        b += arr[a] - arr[a - 1];
    }
    return b;
}