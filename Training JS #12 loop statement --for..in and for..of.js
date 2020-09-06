//https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript

function giveMeFive(obj){
    let arr = [];
    for (let key in obj){
        if(key.length == 5) arr.push(key);
        if(obj[key].length === 5) arr.push(obj[key]);
    }
    return arr;
}

function giveMeFive(obj){
    let keys = Object.entries(obj).flat();
    let values = Object.values(obj);
    let arr =  keys.concat(values)
    return arr.filter(el => el.length == 5)
    // for let key in obj
}
