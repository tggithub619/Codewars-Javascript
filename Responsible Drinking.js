//https://www.codewars.com/kata/5aee86c5783bb432cd000018/train/javascript

function hydrate(s) {
    let str = s.split(' ').filter(el => Number(el)).map(el => +el).reduce((a,b) => a+b,0)
    return str <= 1 ? `${str} glass of water`: `${str} glasses of water`
}
