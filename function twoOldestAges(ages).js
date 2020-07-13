//https://www.codewars.com/kata/511f11d355fe575d2c000001/train/javascript

function twoOldestAges(ages){
    ages.sort((a, b) => a - b);
    let arr = [];
    arr.push(ages[ages.length-2])
    arr.push(ages[ages.length-1])
    return arr
}

function twoOldestAges(ages){
    let max = 0;
    let max2 = 0;
    for (i = 0; i < ages.length; i++){
        if(ages[i] > max){
            max = ages[i];
        }else if(ages[i] > max2){
            max2 = ages[i];
        }
    }
    return [max2, max];
}