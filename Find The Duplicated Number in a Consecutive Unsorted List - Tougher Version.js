//https://www.codewars.com/kata/558f0553803bc3c4720000af/train/javascript

var findDup=function(arr){
    return arr.filter((el, i) => i === arr.indexOf(el) && i !== arr.lastIndexOf(el))[0]
}