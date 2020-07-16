//https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript

const binaryArrayToNumber = arr => {
    let str = arr.join('')
    return parseInt(str, 2);
};
const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''),2)
};