//https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript

function maps(x){
    return x.map(el=> el*2)
}

function maps(x){
    let arr =[]
    for (let i = 0; i < x.length; i++) {
        arr.push(x[i]*2)
    }
    return arr
}