//https://www.codewars.com/kata/55d277882e139d0b6000005d/solutions/javascript

function findAverage(nums) {
    let l = nums.length;
    return nums.reduce((a, b)=> a+b)/l
}