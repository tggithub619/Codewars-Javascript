//https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript

function array(arr){
    return  arr.split(",").slice(1, -1).join(" ") || null
}