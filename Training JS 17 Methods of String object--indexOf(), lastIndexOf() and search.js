//https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript

function firstToLast(str,c){
    let first =  str.indexOf(c);
    let last = str.lastIndexOf(c);
    return (last<0) ? last : last-first;
}
