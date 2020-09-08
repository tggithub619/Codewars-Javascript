//https://www.codewars.com/kata/5768a693a3205e1cc100071f/train/javascript

function initializeNames(name){
    let arr = name.split(' ');
    if( arr.length > 2){
        for (let i = 1; i< arr.length-1; i++){
            arr[i] =arr[i].slice(0,1)+ '.';
        }
    }
    return arr.join(' ');
}
