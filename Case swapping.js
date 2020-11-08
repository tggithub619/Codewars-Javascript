//https://www.codewars.com/kata/5590961e6620c0825000008f/train/javascript

function swap(str){
    return str.split("").map(a => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()).join('');
}