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
