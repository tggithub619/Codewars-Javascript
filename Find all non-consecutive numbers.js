//https://www.codewars.com/kata/58f8b35fda19c0c79400020f


function allNonConsecutive (arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] - arr[i] !== 1) {
            res.push({ i: i + 1, n: arr[i + 1] });
        }
    }
    return res.slice(0, res.length - 1);
}

//[ 1, 2, 3, 4, 6, 7, 8, 10 ]
// Test Passed: Value == '[{ i: 4, n: 6 }, { i: 7, n: 10 }]'