//https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

function positiveSum(arr) {
    let newArr= [];
    for ( i in arr){
        if (arr[i]>0) {
            newArr.push(arr[i])};
    }
    return newArr.reduce((a,b)=> a+b, 0);
}

function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

function positiveSum (arr) {
    return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
}