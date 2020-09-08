//https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript

function addLength(str) {
    let arr =  str.split(' ').map(el=> el+ ' ' + el.length);
    return arr
}
