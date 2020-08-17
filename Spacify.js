//https://www.codewars.com/kata/57f8ee485cae443c4d000127/train/javascript

function spacify(str) {
    let res = ''
    for ( let i = 0; i <= str.length-2; i++){
        res+=str[i]+' '
    }
    return res+str[str.length-1]
}

function spacify(str) {
    return str.split("").join(" ");
}