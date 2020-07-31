//https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

function firstNonRepeatingLetter(str) {
    let newStr = str.toLowerCase();
    for (let i = 0; i < newStr.length; i++) {
        if (newStr.indexOf(newStr[i]) === newStr.lastIndexOf(newStr[i]))
            return str[i];
    }
    return '';
}