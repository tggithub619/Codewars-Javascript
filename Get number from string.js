//https://www.codewars.com/kata/57a37f3cbb99449513000cd8/train/javascript

function getNumberFromString(s) {
    return +s.replace(/[a-z\D]/g, '');
}

function getNumberFromString(s) {
    let str = "";
    for ( let i = 0; i < s.length; i++){
        if(!isNaN(s[i]) && s[i] != " "){
            str = str + s[i];
        }
    }
    return +str;
}

