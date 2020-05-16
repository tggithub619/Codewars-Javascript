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