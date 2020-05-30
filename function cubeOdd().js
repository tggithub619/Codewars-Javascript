//https://www.codewars.com/kata/580dda86c40fa6c45f00028a/train/javascript

function cubeOdd(arr) {
    let sum = 0;
    for ( let i =0; i< arr.length; i++){
        if (typeof arr[i] !== 'number') return undefined;
        else if (arr[i] %2 !==0) {
            arr[i]= Math.pow(arr[i], 3);
            sum += arr[i];
        }
    }
    return   sum;
}