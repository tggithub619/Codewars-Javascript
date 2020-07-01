//https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d/train/javascript

function halvingSum(n) {
    let sum = 0;
    do {
        sum = sum + n;
        n = Math.trunc(n / 2);
    } while (n>=1);
    return sum;
}
