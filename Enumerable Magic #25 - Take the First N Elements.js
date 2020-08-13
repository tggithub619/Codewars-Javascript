//https://www.codewars.com/kata/545afd0761aa4c3055001386/train/javascript

function take(arr, n) {
    return arr.splice(0,n )
}

function take(arr, n) {
    let newArr = [];
    for(let i=0; i<arr.length; i++) {
        if(newArr.length !== n) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}
