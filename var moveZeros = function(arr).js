//https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

var moveZeros = function (arr) {
    let newarr = [];
    let count = 0;
    for (let i = 0; i<arr.length; i++){
        if (arr[i] !== 0)newarr.push(arr[i]);
        else count++;

    }
    for (let i = 0; i<count; i++){
        newarr.push(0);
    }
    return newarr;
}