//function squareDigits(num){
//     return +num.toString().split('').map(i => i*i).join('');
// }

function squareDigits(num){
    return +num.toString().split('').map(i => i**2).join('');
}

function squareDigits(num){
    let numStr = num + '';
    let newStr = '';
    for(let i = 0; i < numStr.length; i++){
        newStr = newStr + Math.pow(numStr[i], 2);
    }
    return +newStr;
}
