//https://www.codewars.com/kata/557cffec8c3e8e55cc00010f

function countZeros(n) {
    let res = '';
    for(let i = 1; i <= n; i++){
        res = res + i;
    }
    res = res.split('').filter(el => el === '0');
    return res.length;
}

//Test.assertEquals(countZeros(10), 1);
// Test.assertEquals(countZeros(100), 11);
// Test.assertEquals(countZeros(200), 31);

function countZeros(n)
{
    for (var count = 0; n > 0; n--)
        count += n.toString().split("").filter(x => x === '0').length;
    return count;
}

function countZeros(n) {
    return Array.from(Array(n)).map((v,i) => i+1)
        .join('')
        .replace(/[^0]/g, '')
        .length
}

function countZeros(n) {
    for (var str='',i=1; i<=n; i++) { str += i; }
    return str.match(/0/g).length;
}