//https://www.codewars.com/kata/594093784aafb857f0000122/train/javascript

function diff(a, b){
    let resA = a.filter(el => !b.includes(el))
    let resB = b.filter(el => !a.includes(el))

    return [...new Set(resA.concat(resB))].sort()
}