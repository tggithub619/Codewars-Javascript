//https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript

function sumOfMinimums(arr) {
    let newarr = [];
    let min = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        min =  Math.min(...arr[i]);
        newarr.push(min);
    }
    for (let j = 0; j<newarr.length; j++){
        sum = sum  + newarr[j];
    }
    return sum;

}
console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));

