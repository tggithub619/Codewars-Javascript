//https://www.codewars.com/kata/55eca815d0d20962e1000106/train/javascript

function generateRange(min, max, step){
    let arr = [];
    for ( let i = min; i <= max; i+=step)
        arr.push(i);
    return arr;

}

function generateRange(min, max, step){
    return min > max ? [] : [min, ...generateRange(min + step, max, step)];
}

