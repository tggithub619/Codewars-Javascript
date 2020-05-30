//https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

function squareSum(arr){
    let sqr = 0;
    for ( let i =0; i< arr.length; i++){
        sqr += (arr[i]**2);
    }
    return sqr;
}