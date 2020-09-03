//https://www.codewars.com/kata/5b4e474305f04bea11000148/train/javascript

function digits(num){
    num = num + '' ;
    let res = []
    for ( let i =0; i <num.length; i++){
        for (let j = i + 1; j < num.length; j++){
            res.push(Number(num[i]) + Number(num[j]))
        }}
    return res
}
