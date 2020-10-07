//https://www.codewars.com/kata/55afed09237df73343000042/train/javascript

function isLucky(n) {
    let sum = 0;
    let str = n+'';
    for(let i=0; i<str.length; i++){
        sum += str[i];
    }
    return (sum==0 || sum%9==0) ? true : false;
}

function isLucky(n) {
    return n%9==0;
}



