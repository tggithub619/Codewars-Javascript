//https://www.codewars.com/kata/544a54fd18b8e06d240005c0

function min(arr, toReturn) {
    return toReturn == "value" ? Math.min(...arr): arr.indexOf(Math.min(...arr))
}

//Test.assertEquals(min([1,2,3,4,5], 'value'), 1)
// Test.assertEquals(min([1,2,3,4,5], 'index'), 0)