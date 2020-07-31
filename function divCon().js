//https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript

function divCon(x){
    let arr = [];
    let sumX = 0;
    let sumAr = 0;
    for ( let i = 0; i < x.length; i++){
        if (typeof x[i] === 'number') {
            sumX += x[i];
        }
        else arr.push(+x[i]);
    }
    for ( let i = 0; i < arr.length; i++){
        sumAr += arr[i];
    }
    return sumX-sumAr;
}

function divCon(x){
    let str = x.filter(el => typeof(el) === 'string');
    let sum = 0;
    for (let el of str){
        sum = sum + +el;
    }
    let num = x.filter(el => typeof(el) === 'number');
    let numS = 0;
    for (let el of num){
        numS = numS + el;
    }
    return  numS - sum
}