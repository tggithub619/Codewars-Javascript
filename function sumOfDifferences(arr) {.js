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