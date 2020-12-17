//https://www.codewars.com/kata/59ca8e8e1a68b7de740001f4

function solve(a,b){
    return b.map(x =>  a.filter(y =>  y == x).length)
}


function solve(a,b){
    let res = [];
    let count = 0;
    for (let i = 0; i < b.length; i++){
        for (let j = 0; j < a.length; j++){
            if (b[i] == a[j]){
                count++;
            }
        }
        res.push(count);
        count = 0;
    }
    return res;
}