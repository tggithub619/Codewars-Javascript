//https://www.codewars.com/kata/5f55ecd770692e001484af7d/solutions/javascript

function mirror(data) {
    let arr = [];
    for (let el of data){
        arr.push(el);
    }
    arr.sort((a, b) => a - b);
    let length = arr.length;
    for (let i = 1; i < length; i++){
        arr.push(arr[length - 1 - i]);
    }
    return arr;
}

function mirror(data) {
    let dataSorted = [...data].sort((a, b)=> a - b)
    let dataSortedRev = [...dataSorted].reverse().slice(1)
    return dataSorted.concat(dataSortedRev)
}
