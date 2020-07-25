//https://www.codewars.com/kata/56f8fe6a2e6c0dc83b0008a7/train/javascript

function sumSquares(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i] ** 2;
    }
    return result;

    function sumSquares(array) {
        return array.reduce((a,b) => a+b **2, 0)
    }
}