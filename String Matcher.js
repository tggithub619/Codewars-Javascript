//https://www.codewars.com/kata/565ce4ab24ef4aee6a000074

function isMatching(string, str1, str2) {
    let res = (str1+str2).toLowerCase().split('').sort().join('').replace(/ /g, '')
    string = string.toLowerCase().split('').sort().join('').replace(/ /g, '')
    return res == string
}

//or example:
// isMatching("email box", "b aIl", "Mo x e") return true
// but
// isMatching("bouh", "0b", "uh") return false