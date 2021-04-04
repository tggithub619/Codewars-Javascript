//https://www.codewars.com/kata/57cfdf34902f6ba3d300001e

function twoSort(s) {
    let res = s.sort();
    return res[0].split('').join('***');
}

function twoSort(s) {
    return s.sort()[0].split('').join('***');
}

//Test.assertEquals(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
// Test.assertEquals(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e');