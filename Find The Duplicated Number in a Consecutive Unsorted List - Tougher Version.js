//https://www.codewars.com/kata/558f0553803bc3c4720000af/train/javascript

var findDup=function(arr){
    return arr.filter((el, i) => i === arr.indexOf(el) && i !== arr.lastIndexOf(el))[0]
}

function findDup(arr){
    for (let i=0; i<arr.length; ++i){
        for (let j=i+1; j<arr.length; ++j){
            if (arr[i]==arr[j])
                return arr[i]
        }
    }
    return 0;
}
