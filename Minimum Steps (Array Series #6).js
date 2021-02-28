//https://www.codewars.com/kata/5a91a7c5fd8c061367000002/solutions/javascript/me/best_practice

function minimumSteps(num, v){
    let arr = num.sort((a,b)=> a-b)
    let sum = 0
    for ( let i = 0; i < arr.length; i++){
        sum+=arr[i]
        if ( sum >= v) return i
    }

}

function minimumSteps(num, v){
    num = num.sort((a, b) => a - b);
    let sum = 0;
    let i = 0;
    while(sum < v) {
        sum += num[i];
        i++;
    }
    return i - 1;
}
// Test.assertEquals(minimumSteps([4,6,3], 7), 1);
//   Test.assertEquals(minimumSteps([10,9,9,8], 17), 1);
//   Test.assertEquals(minimumSteps([8,9,10,4,2], 23), 3);