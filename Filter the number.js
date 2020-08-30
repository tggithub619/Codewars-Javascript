//https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript

var FilterString = function(value) {
    let str = "";
    for ( let i = 0; i < value.length; i++){
        if (isNaN(value[i]) === false){
            str = str + value[i];
        }
    }
    return +str;
}

var FilterString = function(value) {
    return +value.replace(/[a-z]/g,'')
}

var FilterString = function(value) {
    let str = '';
    for (let i = 0; i < value.length; i++) {
        if (typeof +value[i] === 'number' && Number.isNaN(+value[i])) continue;
        else str = str + value[i];
        console.log(str);
    }
    return +str;
}


