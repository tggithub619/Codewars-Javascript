//https://www.codewars.com/kata/57ab2d6072292dbf7c000039/solutions/javascript/me/best_practice

function correctPolishLetters (string) {
    let obj = {
        ą: 'a',
        ć: 'c',
        ę: 'e',
        ł: 'l',
        ń: 'n',
        ó: 'o',
        ś: 's',
        ź: 'z',
        ż: 'z',
    }
    let res = '';
    for(let el of string){
        if(obj[el]) res += obj[el];
        else res += el;
    }
    return res;
}