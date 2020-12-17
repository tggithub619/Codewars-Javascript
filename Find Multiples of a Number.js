//https://www.codewars.com/kata/58ca658cc0d6401f2700045f

function findMultiples(s, e) {
    let arr = []
    for (let i = s; i <= e; i+= s){
        arr.push(i)
    }
    return arr
}