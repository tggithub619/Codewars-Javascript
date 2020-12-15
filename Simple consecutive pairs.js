//https://www.codewars.com/kata/5a3e1319b6486ac96f000049/train/javascript

function pairs(arr){
    let count = []
    for ( let i =0; i <= arr.length; i+=2){
        if ( arr[i]+1 == arr[i+1] || arr[i] === arr[i + 1] + 1)
            count.push([arr[i], arr[i + 1]])

    }
    return count.length
}

function pairs(array, count = 0) {
    for (let i = 0; i < array.length; i += 2)
        if (Math.abs(array[i] - array[i + 1]) === 1)
            count += 1;
    return count;
}