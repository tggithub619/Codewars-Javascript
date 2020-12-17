//https://www.codewars.com/kata/5aff237c578a14752d0035ae

function predictAge(...age){
    let arr = [...age]
    return Math.floor(Math.sqrt(arr.map(x => x * x).reduce((a, b) => a + b))/ 2)
}