//https://www.codewars.com/kata/57f75cc397d62fc93d000059

function calc(x){
    let total1 = ''
    for (let i=0; i<x.length; i++){
        total1 += x.charCodeAt(i)
    }
    let total2 = total1.replace(/[7]/g,'1')
    total2 = total2.split('').reduce((a,b)=> +a + +b)
    total1 = +total1.split('').reduce((a,b)=> +a + +b)
    return +total1 - +total2
}

