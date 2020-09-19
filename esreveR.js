//https://www.codewars.com/kata/5413759479ba273f8100003d/train/javascript

reverse = function(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }

    return arr
}
