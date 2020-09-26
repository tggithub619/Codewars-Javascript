//https://www.codewars.com/kata/5569b10074fe4a6715000054/solutions/javascript

function count(a){
    let obj = {};
    a.forEach(x => obj[x] ? obj[x]++ : obj[x] = 1)
    return obj;
}
