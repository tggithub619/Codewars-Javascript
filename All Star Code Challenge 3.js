//https://www.codewars.com/kata/58640340b3a675d9a70000b9/train/javascript

var removeVowels = function(str){
    return str.replace(/[aeiou]/g,'')
}

var removeVowels = function(str) {
    return [...str].filter(c => !'aeiou'.includes(c)).join('');
}
