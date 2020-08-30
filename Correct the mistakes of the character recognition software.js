//https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript

function correct(string){
    return string.replace(/[5]/g,'S').replace(/[0]/g,'O').replace(/[1]/g,'I')
}

function swap(code){
    let str = "501";
    let str2 = "SOI";
    let i = str.indexOf(code);
    return str2[i];
}

function correct(str){
    return str.replace(/[501]/g, swap)
}

function correct(str){
    return str.replace(/[501]/g, char=> "SOI"["501".indexOf(char)])
}
