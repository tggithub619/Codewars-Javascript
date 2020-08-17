//https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

var uniqueInOrder=function(str){
    let arr = [];
    for (let i =0; i < str.length; i++){
        if ( str[i] !== str[i+1])
            arr.push(str[i])
    }
    return arr
}

var uniqueInOrder=function(str){
    return str.split('').filter((el, i, arr) => arr[i] !== arr[i+1])
}