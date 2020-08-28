//https://www.codewars.com/kata/5868812b15f0057e05000001/train/javascript

function tailSwap(arr) {
    let first = [];
    let second = [];
    arr.map(v =>  v.split(":").filter((el, i) => (i%2 === 0)? first.push(el) : second.push(el)))
    second = second.reverse();
    first = first.map((v, i) => v + ":" + second[i]);
    return first
}
