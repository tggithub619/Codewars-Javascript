//https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

function digitize(n) {
    let str = n+"";
    return Array.from(String(str), Number).reverse()
}

function digitize(n) {
    var arr = [];
    while(n>0){arr.unshift(n%10);
        n=Math.floor(n/10);}
    return arr.reverse();
}

function digitize(n) {
    return String(n).split('').map(Number).reverse();
}

function digitize(n) {
    let str = n+'';
    return str.split('').reverse().map(el => +el);
}