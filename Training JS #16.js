//https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript

function cutIt(arr){
    let length = Math.min(...arr.map(el => el.length))
    return arr.map(el=> el.slice(0, length))
}

function cutIt(arr){
    let len = [];
    for ( let i = 0; i< arr.length; i++){
        len.push(arr[i].length);
    }
    let min = Math.min(...len);
    for ( let i = 0; i<arr.length; i++){
        arr[i] = arr[i].slice(0, min);
    }
    return arr;
}

function cutIt(arr){
    let len = arr.map(el => el.length);
    let min = Math.min(...len);
    return arr.map(el => el.slice(0, min));

}
function cutIt(arr){
    let len = [];
    for ( let i = 0; i< arr.length; i++){
        len.push(arr[i].length);
    }
    let min = Math.min(...len);
    return arr.map(el => el.slice(0, min))

}
