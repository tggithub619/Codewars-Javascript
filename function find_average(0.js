//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

function find_average(arr) {
    let avr = 0;
    let sum = 0;
    for ( let i = 0; i <arr.length; i++){
        sum += arr[i];
        avr = sum / (i+1);
    }
    return avr;
}
