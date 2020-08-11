//https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript

function invert(array) {
    return array.map(el=> -el);
}

function invert(array) {
    if (array.length < 1) return []
    let res =[];
    for (let i = 0; i<array.length; i++){
        res.push(-array[i]);
    }
    return res;
}