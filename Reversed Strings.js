//https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

function solution(str){
    let res = '';
    for (let i = str.length-1; i >= 0; i--) {
        res = res + str[i];
    }
    return res;
}

function solution(str){
    return str.split('').reverse().join('');
}