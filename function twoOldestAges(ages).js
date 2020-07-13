//https://www.codewars.com/kata/511f11d355fe575d2c000001/train/javascript

function twoOldestAges(ages){
    ages.sort((a, b) => a - b);
    let arr = [];
    arr.push(ages[ages.length-2])
    arr.push(ages[ages.length-1])
    return arr
}