//https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9

function rowWeights(array){
    let sumOdd = 0;
    let sumEven = 0;
    for (let i = 0; i < array.length; i++){
        if (i%2===0)
            sumOdd = sumOdd +array[i];
        else  sumEven = sumEven + array[i];

    }
    return [sumOdd, sumEven];
}

function rowWeights(array){
    let x = array.filter((x, i)=>i%2==0).reduce((a,b)=>a+b,0);
    let y = array.filter((x, i)=>i%2!=0).reduce((a,b)=>a+b,0);
    return [x, y]
}

// Test.assertSimilar(rowWeights([80]), [80,0]);
//   Test.assertSimilar(rowWeights([100,50]), [100,50]);
//   Test.assertSimilar(rowWeights([50,60,70,80]), [120,140]);
//   Test.assertSimilar(rowWeights([13,27,49]), [62,27]);

rowWeights=arr=>arr.reduce((a,b,i)=>(a[i%2]+=b,a),[0,0])