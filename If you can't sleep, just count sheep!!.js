//https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

var countSheep = function (num){
    let str = '';
    for (let i=1; i <= num; i++){
        str += `${i}`+ ' sheep...'
    }
    return str
}

var countSheep = function (n){
    return [...Array(n)].map((el,i)=> i+1+' sheep...').join('')
}