//https://www.codewars.com/kata/5174a4c0f2769dd8b1000003

function solution(n){
    return n === null ? [] : n.sort((a, b) => a - b);
}

//solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []