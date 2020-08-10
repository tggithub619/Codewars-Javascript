//https://www.codewars.com/kata/5783d8f3202c0e486c001d23/train/javascript

function toNumberArray(stringarray){
    return stringarray.map(el=> +el)
}

function toNumberArray(stringarray){
    return stringarray.map(Number);
}

function toNumberArray(stringarray){
    return stringarray.map(parseFloat);
}

function toNumberArray(str){
    let arr = [];
    for(let i = 0; i < str.length; i++){
        arr.push(+str[i]);
    }
    return arr;
}