//https://www.codewars.com/kata/588e27b7d1140d31cb000060

function generatePairs(n) {
    console.log(n)

    let arr = []
    for (let i = 0; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            arr.push([i, j])
        }
    }
    return arr
}


//generatePairs(2), [ [0, 0], [0, 1], [0, 2], [1, 1], [1, 2], [2, 2] ]