//https://www.codewars.com/kata/58308360aeb69a460b0002b2/train/javascript

function unique(arr) {
    let res =  arr.filter((el, i) => arr.indexOf(el) === i);
    return res
}
