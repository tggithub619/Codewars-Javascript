//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text){
    let str =  text.toLowerCase().split('');
    let count = 0;
    let dupl = str.filter((el, i) =>str.indexOf(el) != str.lastIndexOf(el) && i ===str.indexOf(el))
    return dupl.length
}