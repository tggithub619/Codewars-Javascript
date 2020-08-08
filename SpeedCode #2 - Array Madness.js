//https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript

function arrayMadness(a, b) {
    let aSum =  a.reduce((x,y)=> x + Math.pow(y,2), 0);
    let bSum =  b.reduce((x,y)=> x + Math.pow(y,3), 0);
    return (aSum>bSum);
}

function arrayMadness(a, b) {
    return a.reduce((acc, x) => acc + x**2, 0) > b.reduce((acc, x) => acc + x**3, 0)
}

function arrayMadness(a,b){
    let aSum = 0;
    let bSum = 0;
    for (let i = 0; i < a.length; i++){
        aSum = aSum + a[i]**2;
    }
    for (let i = 0; i < b.length; i++){
        bSum = bSum + b[i]**3;
    }
    return aSum>bSum;
}