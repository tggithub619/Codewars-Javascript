//https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

function firstNonRepeatingLetter(str) {
    let newStr = str.toLowerCase();
    for (let i = 0; i < newStr.length; i++) {
        if (newStr.indexOf(newStr[i]) === newStr.lastIndexOf(newStr[i]))
            return str[i];
    }
    return '';
}

function firstNonRepeatingLetter(s) {
    let arr = s.toLowerCase().split('');
    let res = arr.filter((el, i) => i == arr.indexOf(el) && i == arr.lastIndexOf(el))[0];
    for(let i = 0; i < s.length; i++){
        if(res == s[i].toLowerCase()){res = s[i]}
    }
    return (res == undefined) ? '' : res;
}

function firstNonRepeatingLetter(s) {
    let str = s.toLowerCase()
    let unique = [...str].filter((el, i)=> str.indexOf(el) === str.lastIndexOf(el));
    if(!unique.length) return '';
    return s.includes(unique[0]) ? unique[0] : unique[0].toUpperCase();
}