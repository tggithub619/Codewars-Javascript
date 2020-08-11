//https://www.codewars.com/kata/580777ee2e14accd9f000165/solutions/javascript

function skiponacci(n) {
    let arr = [1, 1];
    let num = 0;
    for (let i = 2; i < n; i++) {
        num = arr[i - 1] + arr[i - 2];
        arr.push(num);
    }
    let res = arr.filter((el, i) => i % 2 === 0);
    return (n % 2 !== 0)? res.join(' skip ') : res.join(' skip ') + ' skip';
}