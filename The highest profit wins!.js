//https://www.codewars.com/kata/559590633066759614000063/train/javascript

function minMax(arr){
    let max = 0;
    let min = 0;
    for (let i = 0; i < arr.length; i++){
        max = Math.max(...arr);
        min = Math.min(...arr);
    }
    return [min, max]; // fix me!
}

function minMax(arr){
      return [Math.min(...arr), Math.max(...arr)]; // fix me!
}
