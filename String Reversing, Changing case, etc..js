//https://www.codewars.com/kata/58305403aeb69a460b00019a/train/javascript

function withReverseMirror(str) {
    return  [...str].reverse().map(el => el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()).join('')
}

function withoutReverseMirror(str){
    return [...str].map(el => el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()).join('')
}

function reverseAndMirror(s1,s2) {
    return`${withReverseMirror(s2)}@@@${withReverseMirror(s1)}${withoutReverseMirror(s1)}`;
}

function reverseAndMirror(s1,s2) {
    let strOne = s1.replace(/[A-z]/g, val=> val === val.toLowerCase() ? val.toUpperCase() : val.toLowerCase());
    let strTwo = s2.replace(/[A-z]/g, val=> val === val.toLowerCase() ? val.toUpperCase() : val.toLowerCase());
    let str1 = strOne.split('').reverse();
    let str2 = strTwo.split('').reverse();
    let str = str1.join('');
    let newStr = str.concat(strOne);
    let strSecond = str2.join('') + '@@@';

    return strSecond.concat(newStr);
}
