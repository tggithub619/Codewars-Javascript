//https://www.codewars.com/kata/58646a1173bd9c86080000ef

function  fibonacci(n){
    let res = 0;
    const arr = [0, 1];
    for (let i = 0; i < n; i++) {
        arr.push(arr[i] + arr[i + 1]);
    }
    return arr[n]

}