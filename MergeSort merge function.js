//https://www.codewars.com/kata/52336a4436e0b095d8000093

function mergesorted(a, b) {
    let arr = [];
    while(a.length && b.length) {
        arr.push(a[0] < b[0] ? a.shift() : b.shift());
    }
    return arr.concat(a.length ? a : b);
}
