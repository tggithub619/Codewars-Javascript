//https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript

function arrayMadness(a, b) {
    let aSum =  a.reduce((x,y)=> x + Math.pow(y,2), 0);
    let bSum =  b.reduce((x,y)=> x + Math.pow(y,3), 0);
    return (aSum>bSum);
}