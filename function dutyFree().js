https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/javascript

function dutyFree(normPrice, discount, hol){
    return Math.floor(hol/(normPrice*discount/100));

}

console.log(dutyFree(12, 50, 1000));  //166
