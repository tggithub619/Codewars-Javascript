//https://www.codewars.com/kata/582c81d982a0a65424000201/train/javascript

function arrCheck(arr){
    let count = 0;
    for (let i = 0; i <arr.length; i++){
        if (Array.isArray(arr[i])) count++;
    }
    return count === arr.length;
}

