function squareDigits(num){
    let numStr = num + '';
    let newStr = '';
    for(let i = 0; i < numStr.length; i++){
        newStr = newStr + Math.pow(numStr[i], 2);
    }
    return +newStr;
}

