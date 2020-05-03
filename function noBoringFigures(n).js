function noBoringZeros(n) {
    while(n%10 === 0 && n!==0){
        n = n/10;
    }
    return n;
}

function noBoringZeros(n) {
    if (n == 0) return n;
    else{
        while ( n % 10 == 0){

            n  /= 10 ;}
    }
    return n;
}