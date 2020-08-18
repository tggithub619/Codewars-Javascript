//https://www.codewars.com/kata/5631213916d70a0979000066/train/javascript

function pattern(n){
    let res = '';
    let s = '*';
    for (let i = 1; i < n; i++) {
        res += i + '\n' + 1
        for (let j = 1; j <= i; j++) {
            res += s;
        }
    }
    return res + n;
}
