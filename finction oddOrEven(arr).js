//https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

function oddOrEven(arr) {
    let sum = 0;
    for ( let i =0; i< arr.length; i++){
        sum += arr[i];
    }

    return (sum % 2 == 0 || arr.length == 0) ? "even":"odd";
}