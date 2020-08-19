//https://www.codewars.com/kata/5729b103dd8bac11a900119e/train/javascript

function fiveLine(s){
    s= s.trim()
    let i = 2
    let str = ''
    while (i<= 5){
        str += `\n`+s.repeat(i);
        i++
    }
    return s+str
}

function fiveLine(s){
    s = s.trim();
    return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`;
}

function fiveLine(s) {
    return [1,2,3,4,5].map(n => s.trim().repeat(n)).join('\n');
}