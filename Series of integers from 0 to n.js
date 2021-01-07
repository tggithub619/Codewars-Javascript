//https://www.codewars.com/kata/5841f4fb673ea2a2ae000111

function generateIntegers(n) {
    let arr = []
    for ( let i =0; i<= n; i++){
        arr.push(i)
    }
    return arr
}

//generateIntegers(3), [0, 1, 2, 3])

function generateIntegers(n) {
    return [...Array(n + 1)].map((_, i) => i)
}

