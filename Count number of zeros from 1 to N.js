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

