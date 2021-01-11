//https://www.codewars.com/kata/583af10620dda4da270000c5


function mergeArrays(a, b) {
    console.log(a, b)
    let res = []
    for (let i =0; i < Math.max(a.length, b.length); i++){
        res.push(a[i])
        res.push(b[i])
    }
    res= res.filter(el=> el !== undefined)
    return res
}

//mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']), [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8])