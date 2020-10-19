//https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc/train/javascript

function solve(arr){
    let obj = {};
    for (let el of arr){
        if (obj[el]) obj[el]++;
        else obj[el] = 1;
    }
    arr = arr.sort((a,b)=>obj[b] === obj[a]? a-b : obj[b]-obj[a]);
    return arr;
}