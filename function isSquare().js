function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}

var isSquare = function(n){
    if(n === 0){
        return true} else {
        return n > 0 && Math.sqrt(n) % 1 === 0;
    }
}