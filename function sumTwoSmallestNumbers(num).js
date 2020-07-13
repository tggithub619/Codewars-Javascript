//https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

function sumTwoSmallestNumbers(num) {
    num.sort((a, b) => a - b);
    return num[0]+num[1]
}