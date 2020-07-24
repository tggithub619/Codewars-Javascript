//https://www.codewars.com/kata/55d277882e139d0b6000005d/solutions/javascript

function findAverage(nums) {
    let l = nums.length;
    return nums.reduce((a, b)=> a+b)/l
}

function findAverage(nums) {
    let l = nums.length;
    let sum = 0;
    for (let i = 0; i<l; i++){
        sum+=nums[i]
    }
    return sum/l
}