//https://www.codewars.com/kata/56d93f249c844788bc000002/train/javascript

function testit(s){
    return s.toUpperCase();
    }

function testit(s){
    let str = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i+1] === ' ' || i === s.length-1) {
            str += s[i].toUpperCase();
        } else {
            str += s[i]
        }
    }
    return str;
}

function testit(s) {
    return (s.length == 0) ? '' : s.split(' ').map(el => el.slice(0, -1) + el[el.length-1].toUpperCase()).join(' ');
}