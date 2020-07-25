//https://www.codewars.com/kata/557226cd3554219bdf00019b/train/javascript

function fib(num) {
    const arr = [0, 1];
    for (let i = 0; i < num; i++) {
        arr.push(arr[i] + arr[i + 1]);
    }
    return arr[arr.length - 2];
}