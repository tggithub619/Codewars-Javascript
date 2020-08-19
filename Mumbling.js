//

function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

function accum(s) {
    let arr = []
    for (let i = 0; i < s.length; i++) {
        arr.push(s[i].toUpperCase()+s[i].toLowerCase().repeat(i))
    }
    return arr.join('-')
}