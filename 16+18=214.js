//https://www.codewars.com/kata/5effa412233ac3002a9e471d

function add(x, y) {
    let arr1 = x.toString().split('').reverse()
    let arr2 = y.toString().split('').reverse()
    let res = []
    for (let i=0; i<Math.max(arr1.length, arr2.length); i++){
        res.push((+arr2[i] || 0) + (+arr1[i] || 0))
    }
    return +res.reverse().join('')
}


//assert.strictEqual(add(2, 11), 13);
//     assert.strictEqual(add(0, 1), 1);
//     assert.strictEqual(add(0, 0), 0);