//https://www.codewars.com/kata/5b047875de4c7f9af800011b/train/javascript

function sentence(List) {
    let res = List.map(el => Object.entries(el)[0]).sort((a, b) => a[0] - b[0])
    return res.map(el => el[1]).join(' ')
}
