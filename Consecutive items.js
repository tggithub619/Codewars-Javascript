//https://www.codewars.com/kata/5f6d533e1475f30001e47514/

function consecutive(arr, a, b) {
    return arr[arr.indexOf(a)-1] == b || arr[arr.indexOf(a)+1] == b
}

//consecutive([1, 3, 5, 7], 3, 1), true);

function consecutive(arr, a, b) {
    return Math.abs(arr.indexOf(a) - arr.indexOf(b)) == 1;
}