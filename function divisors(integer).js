//https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript

function divisors(integer) {
    let arr = [];
    for (i = 2; i <integer; i++){
        if (integer % i === 0) {
            arr.push(i);
        }
    }
    if (arr.length === 0) return integer + " is prime";
    else return arr;

};

function divisors(integer) {
    for(var div = [], i = 2; i < integer; i++) if(integer % i == 0) div.push(i);
    return div.length > 0 ? div : integer + " is prime";
}