//https://www.codewars.com/kata/56b29582461215098d00000f/solutions/javascript

function pipeFix(numbers) {
    let max = Math.max(...numbers);
    let min = Math.min(...numbers);
    let arr = [];
    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
    return arr;
}

function pipeFix(numbers){
    var min = numbers[0];
    var max = numbers[numbers.length - 1];
    var array = [];

    for(var i = min; i<=max; i++)
    {
        array.push(i);
    }

    return array;
}