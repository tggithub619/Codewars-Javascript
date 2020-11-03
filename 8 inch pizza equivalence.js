//https://www.codewars.com/kata/599bb194b7a047b04d000077/train/javascript

function howManyPizzas(n){
    pizza =  Math.trunc(n ** 2 / 64)
    slice =   Math.round(n ** 2 % 64 / 8)
    return `pizzas: ${pizza}, slices: ${slice}`
}