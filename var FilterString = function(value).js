var FilterString = function(value) {
    let str = "";
    for ( let i = 0; i < value.length; i++){
        if (isNaN(value[i]) === false){
            str = str + value[i];
        }
    }
    return +str;
}