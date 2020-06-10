//https://www.codewars.com/kata/57ced2c1c6fdc22123000316/train/javascript

function numObj(s){
    let arr = [];
    for (let el of s){
        let obj = {};
        obj[el] =String.fromCharCode(el);
        arr.push(obj);
    }
    return arr;
}