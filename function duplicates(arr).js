//https://www.codewars.com/kata/5558cc216a7a231ac9000022/train/javascript

function duplicates(arr) {
    const duplicates = arr.filter((el, i) => i !== arr.indexOf(el) && i === arr.lastIndexOf(el));
    return duplicates;
}