//https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c/solutions/javascript/me/best_practice

function switcher(x){
    let str = '';
    let alf = "abcdefghijklmnopqrstuvwxyz!? ";
    let abc = '0zyxwvutsrqponmlkjihgfedcba!? ';
    for (let i in x){
        str += abc[x[i]];
    }
    return str;
}