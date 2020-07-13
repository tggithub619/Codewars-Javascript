//https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript

function largestPairSum(num){
    num.sort((a, b) => a - b);
    return num[num.length-2]+num[num.length-1];
}