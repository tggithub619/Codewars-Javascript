//https://www.codewars.com/kata/5a905c2157c562994900009d

function productArray(numbers){
    return numbers.map(x => numbers.reduce((a,b) => a * b) / x)
}

// Test.assertSimilar(productArray([12,20]), [20,12]);
//   Test.assertSimilar(productArray([12,20]), [20,12]);
//   Test.assertSimilar(productArray([3,27,4,2]), [216,24,162,324]);

function productArray(numbers){
    let newarr = [];
    let mult = numbers.reduce((a, b) => a * b);

    for (let i = 0; i < numbers.length; i++) {
        newarr.push(mult/numbers[i]);
    }

    return newarr;
}