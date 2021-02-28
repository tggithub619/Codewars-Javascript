//https://www.codewars.com/kata/5a512f6a80eba857280000fc

function nthSmallest(arr, pos){
    arr = arr.sort((a, b) => a - b);
    return arr[pos - 1];
}

// Test.assertEquals(nthSmallest([3,1,2],2),2);
//   Test.assertEquals(nthSmallest([15,20,7,10,4,3],3),7);
//   Test.assertEquals(nthSmallest([-5,-1,-6,-18],4),-1);