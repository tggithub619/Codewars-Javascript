//https://www.codewars.com/kata/57fb142297e0860073000064/train/javascript

function product(s){
    let str = s.split('')
    let excl = str.reduce((c, el) => (el === '!' ? c + 1 : c),0)
    let que = str.reduce((c, el) => (el === '?' ? c + 1 : c),0)
    return excl * que
}
