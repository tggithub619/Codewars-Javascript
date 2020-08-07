//https://www.codewars.com/kata/5b180e9fedaa564a7000009a/solutions/javascript/me/best_practice

function solve(s){
    let uCount = 0;
    let lCount = 0;
    for ( let i =0; i<s.length; i++){
        if ( s[i] === s[i].toLowerCase()) lCount++;
        if ( s[i] === s[i].toUpperCase()) uCount++;
    }
    return uCount > lCount ? s.toUpperCase() : s.toLowerCase();

}