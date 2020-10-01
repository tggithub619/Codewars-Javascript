//https://www.codewars.com/kata/5733d6c2d780e20173000baa/solutions/javascript/me/best_practice

function maxMin(arr1,arr2){
    let arr = [];
    for(let i=0 ; i < arr1.length; i++) {
        arr.push(Math.abs(arr2[i] - arr1[i]));
    }

    return [Math.max(...arr), Math.min(...arr)];
}
