//https://www.codewars.com/kata/57126304cdbf63c6770012bd/train/javascript

function isDigit(s) {
    return parseFloat(s)===+s
}

function isDigit(s) {
    if (s=="") return false
    if (s==" ") return false
    if ((s>0)||(s<=0))
        return true
    else return false
}
