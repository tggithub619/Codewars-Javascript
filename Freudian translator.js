//https://www.codewars.com/kata/5713bc89c82eff33c60009f7/train/javascript

function toFreud(str) {
    if (str.length===0) return '';
    return str.split(' ').map(el => el = 'sex').join(' ')
}

function toFreud(str) {
    return str.split(" ").map((el)=> el === ""?"":"sex").join(" ");
}

function toFreud(string) {
    if (string.length === 0) return '';
    let str = '';
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ') count++;
    }
    for (let i = 1; i <= count+1; i++) {
        str +=  i !== count + 1 ? 'sex ' : 'sex';
    }
    return str;
}