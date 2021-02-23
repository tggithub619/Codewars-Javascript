//https://www.codewars.com/kata/5a7893ef0025e9eb50000013

function maxGap (num){
    num = num.sort((a,b) => a-b)
    let arr = []
    let dif = 0
    for (let i =0; i<num.length; i++){
        dif = num[i+1]-num[i]
        arr.push(dif)
    }
    arr =arr.slice(0,-1).map(el=> Math.abs(el))
    return Math.max(...arr)
}

// Test.assertEquals(maxGap([13,10,2,9,5]),4);
//   Test.assertEquals(maxGap([13,3,5]),8);
//   Test.assertEquals(maxGap([24,299,131,14,26,25]),168);
//   Test.assertEquals(maxGap([-3,-27,-4,-2]),23);
//   Test.assertEquals(maxGap([-7,-42,-809,-14,-12]),767);