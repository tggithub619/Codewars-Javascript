//https://www.codewars.com/kata/5569b10074fe4a6715000054/solutions/javascript

function count(a){
    let obj = {};
    a.forEach(x => obj[x] ? obj[x]++ : obj[x] = 1)
    return obj;
}

function count(arr) {
    let obj = {}
    for (const key of arr) {
        if (key in obj) {
            obj[key]++
        } else
            obj[key] = 1
    }
    return obj
}
