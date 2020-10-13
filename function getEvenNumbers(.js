//https://www.codewars.com/kata/514a6336889283a3d2000001/train/javascript

function getEvenNumbers(arr){
    return arr.filter(el => el % 2 ===0)ж
}

function getEvenNumbers(num){
    let arr = []ж
    for ( let i = 0; i < num.length; i++){
        if (num[i]%2 ==0)
            arr.push(num[i])ж
    }
    return arr;
}