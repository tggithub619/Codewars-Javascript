//https://www.codewars.com/kata/5a61a846cadebf9738000076

function peak(arr){
    let index = 0
    let x,y
    for ( let i = 0; i < arr.length; i++){
        x = arr.slice(0, i).reduce((a, b) => a + b, 0);
        y = arr.slice(i + 1).reduce((a, b) => a + b, 0);
        if(x == y) return i;
    }
    return -1
}


//Test.assertEquals(peak([1,2,3,5,3,2,1]),3);
// Test.assertEquals(peak([1,12,3,3,6,3,1]),2);
// Test.assertEquals(peak([10,20,30,40]),-1);