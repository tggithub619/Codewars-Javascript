//https://www.codewars.com/kata/559011063089b0d5500001aa

function CalculateString(n, nums) {
    nums = nums.replace(/01|10/g, '');
    return nums.length === n ? n : CalculateString(nums.length, nums);
}

// Test.assertEquals(CalculateString(4,"1100"),0);
//   Test.assertEquals(CalculateString(5,"01010"),1);

function CalculateString(n,  nums) {
    const count = (str, c) => [...str].reduce((a, b) => a + (b == c), 0);
    return Math.abs(count(nums, '0') - count(nums, '1'));
}