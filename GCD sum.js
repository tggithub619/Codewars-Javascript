//https://www.codewars.com/kata/5dd259444228280032b1ed2a

function solve(s,g){
    let res =  []
    let x = 0
    for (let i = 0; i <s; i++) {
        x= g * i
        if (x+g == s){
            res.push(g, x)
        }
    }
    if (res.length == 0){ return -1;}
    return res
}

//    assert.deepEqual(solve(6,3), [3,3]);
//     assert.deepEqual(solve(8,2), [2,6]);
//     assert.deepEqual(solve(10,3), -1);
//     assert.deepEqual(solve(12,4), [4,8]);
//     assert.deepEqual(solve(12,5), -1);

function solve(x, y) {
    return x % y ? -1 : [y, x - y];
}