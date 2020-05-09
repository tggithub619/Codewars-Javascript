function SafeInteger(n) {
    let str = n.toString(2);
    return (str.length <=53)? true: false;
}

function SafeInteger(n) {
    return (Number.isSafeInteger(n))? true : false ;
}