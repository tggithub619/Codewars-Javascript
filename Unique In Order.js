//https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

var uniqueInOrder=function(str){
    let arr = [];
    for (let i =0; i < str.length; i++){
        if ( str[i] !== str[i+1])
            arr.push(str[i])
    }
    return arr
}

var uniqueInOrder=function(iterable){
    return [...iterable].filter((el, i, res) => res[i] !== res[i+1])
}

var uniqueInOrder=function(x){
    return [...x].filter((el, i) => el !== x[i+1])
}