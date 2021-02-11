//https://www.codewars.com/kata/55caf1fd8063ddfa8e000018

function arithmeticSequenceElements(a,r,n) {
    let res = [];
    let i = a;
    while(res.length < n){
        res.push(i);
        i += r;
    }
    return res.join(', ');
}

function arithmeticSequenceElements(a,r,n) {
    let res = [a];
    let x = a
    for(let i=1; i<n; i++){
        res.push(x+=r)
    }
    return res.join(", ")
}

// Test.assertEquals(arithmeticSequenceElements(1, 2, 5), "1, 3, 5, 7, 9");
//   Test.assertEquals(arithmeticSequenceElements(1, 0, 5), "1, 1, 1, 1, 1");
//   Test.assertEquals(arithmeticSequenceElements(1, -3, 10), "1, -2, -5, -8, -11, -14, -17, -20, -23, -26");
//   Test.assertEquals(arithmeticSequenceElements(100, -10, 10), "100, 90, 80, 70, 60, 50, 40, 30, 20, 10");
// });

function arithmeticSequenceElements(a,r,n) {
    var ret = [a]
    while (--n) ret.push(a+=r);
    return ret.join(', ')
}

