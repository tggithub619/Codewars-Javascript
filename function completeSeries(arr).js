//https://www.codewars.com/kata/580a4001d6df740d61000301/train/javascript

function completeSeries(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i], i + 1) !== -1) {
            return [0];
        }
    }

    for (let n = 0; n <= Math.max(...arr); n++) {
        result.push(n);
        console.log(result);
    }
    return result;
}