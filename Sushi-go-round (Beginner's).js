//https://www.codewars.com/kata/59619e4609868dd923000041

function totalBill(str) {
    let res = str.replace(/\s/g,'').length;
    return res*2-Math.floor(res/5)*2
}

function totalBill(s) {
    return s.replace(/ /g, "").replace(/r{5}/g, 'rrrr').length * 2;
}