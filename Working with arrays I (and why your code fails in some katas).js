//https://www.codewars.com/kata/5a4ff3c5fd56cbaf9800003e


function withoutLast(arr) {
    return arr.slice(0,arr.length-1);
}

//Test.assertDeepEquals(withoutLast([1, 2, 3, 4, 5]), [1, 2, 3, 4]);
//     Test.assertDeepEquals(withoutLast([6, 7, 8, 9]), [6, 7, 8]);

function withoutLast(arr) {
    return arr.slice(0,-1);
}