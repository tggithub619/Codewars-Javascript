//https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript

function pickIt(arr){
    var odd=[],even=[], res= [];
    for ( let i = 0; i < arr.length; i++){
        if (arr[i]%2 === 0) even.push(arr[i]);
        if (arr[i]%2 !== 0) odd.push(arr[i]);

    }
    return [odd,even];
}

function pickIt(arr){
    return [arr.filter(v => v % 2 !== 0), arr.filter(v => v % 2 === 0)];
}