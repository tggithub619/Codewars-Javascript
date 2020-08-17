//https://www.codewars.com/kata/56a946cd7bd95ccab2000055/solutions/javascript/me/best_practice

function lowercaseCount(str){
    let arr = str.match(/[a-z]/g);
    return arr ? arr.length : 0;
}

function lowercaseCount(str){
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] === str[i].toLowerCase()
            && str[i] != str[i].toUpperCase()
        ) count ++;
    }
    return count;
}
function lowercaseCount(str){
    let arr = str.match(/[a-z]/g);
    if (!arr)return 0;
    else return arr.length;
}

function lowercaseCount(str){
    let count = 0;
    for (let i = 0 ; i < str.length; i++){
        if (typeof(str[i]) === 'string' && str[i] !== str[i].toUpperCase()){
            count++;
        }
    }
    return count
}