//https://www.codewars.com/kata/5a3f4eace1ce0eeda600003d

function swapTwo(arr, a, b) {
    console.log(arr, a, b)
    arr=arr.slice()
    let indA = arr.indexOf(a);
    let indB = arr.lastIndexOf(b);
    arr[indA] = b;
    arr[indB] = a;



//   arr[arr.indexOf(a)] = b;
//   arr[arr.lastIndexOf(b)] = a;
    return arr
}


//swapTwo([1, 2, 3, 4], 2, 4), [1, 4, 3, 2]);
