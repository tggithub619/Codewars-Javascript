//https://www.codewars.com/kata/5547929140907378f9000039/train/javascript

function shortcut(string){
    return string.replace(/[A,E,i,O,U]/gi,'')
}

function shortcut(string){
    let v = "aeiou";
    let res = "";
    for (let i = 0; i < string.length; i++) {
        if (!(v.indexOf(string[i]) > -1)) {
            res += string[i];
        }
    }
    return res
}

function shortcut(string){
    return string.split(/[aeiou]/).join('');
}
