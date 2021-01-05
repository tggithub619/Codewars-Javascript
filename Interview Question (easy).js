//https://www.codewars.com/kata/5b358a1e228d316283001892

function getStrings(city){
    city = city.toLowerCase().replace(/[^a-z]/gi,"")
    const arr = [...new Set(city)]
    return arr.map(v=>{
        const l = city.length;
        const count = city.replace(new RegExp(`${v}`,'g'),"").length
        return `${v}:`+'*'.repeat(l-count)
    }).join`,`
}

function getStrings(city) {
    city = city.toLowerCase()
    let obj = {}
    let str = ''
    for (let elem of city) {
        if (!(elem in obj)) {
            obj[elem] = '*';
        } else {
            obj[elem] += '*';
        }
    }
    for (let key in obj) {
        if (key !== ' ') {
            str += key + ':' + obj[key] + ',';
        }
    }
    return str.substring(0, str.length - 1)
}


