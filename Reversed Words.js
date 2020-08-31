//https://www.codewars.com/kata/51c8991dee245d7ddf00000e/solutions/javascript

function reverseWords(str){
    return str.split(' ').reverse().join(' ')
}

function reverseWords(str){
    let res = [];
    str = str.split(" ");
    for(let i=str.length-1; i>=0; i--){
        res.push(str[i]);
    }
    return res.join(" ")
}

function shortcut(string){
    let str = '';
    for (let i = 0; i < string.length; i++){
        if (string[i] !== 'a' && string[i] !== 'e' && string[i] !== 'i' && string[i] !== 'i' &&
            string[i] !== 'o' && string[i] !== 'u') str += string[i];
    }
    return str;
}
