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

function swap(char) {
    let str = 'ąćęłńóśźż';
    let i = str.indexOf(char);
    let str2 = 'acelnoszz';
    return str2[i];
}
    function correctPolishLetters (string) {
        return string.replace(/[ąćęłńóśźż]/g, swap)
    }

function correctPolishLetters (string) {
    return string.replace(/ą/g, 'a')
        .replace(/ć/g, 'c')
        .replace(/ę/g, 'e')
        .replace(/ł/g, 'l')
        .replace(/ń/g, 'n')
        .replace(/ó/g, 'o')
        .replace(/ś/g, 's')
        .replace(/ź/g, 'z')
        .replace(/ż/g, 'z');
}