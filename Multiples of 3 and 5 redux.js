//https://www.codewars.com/kata/54bb6ee72c4715684d0008f9/train/javascript

function solution(num){
    let count3 = Math.floor((num - 1) /3);
    let count5 = Math.floor((num - 1) /5);
    let count15 =Math.floor((num - 1) /15);
    let sum3 = (count3 * (count3 + 1)) /2 * 3;
    let sum5 = (count5 * (count5 + 1)) /2 * 5;
    let sum15 = (count15 * (count15 + 1)) /2 * 15;
    return sum3 + sum5 - sum15;

}