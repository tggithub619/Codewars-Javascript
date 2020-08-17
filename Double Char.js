//https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript

function doubleChar(str) {
    let newstr = str[0]+str[0]
    for (let i = 1 ; i < str.length; i++){
        newstr= newstr+str[i]+str[i]
    }
    return newstr
}
