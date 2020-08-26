//https://www.codewars.com/kata/56a25ba95df27b7743000016/train/javascript

function validateCode(code) {
    code= code + '';
    return (code.startsWith('1') || code.startsWith('2') || code.startsWith('3')) ? true : false;
}

function validateCode(code) {
    code= code + '';
    if (code.startsWith('1') || code.startsWith('2') || code.startsWith('3')){
        return true;
    }
    return  false;
}


function validateCode(code) {
    code = '' +code;
    return (code[0]<4)? true : false
}

function validateCode (code) {
    return (code.toString().startsWith(1) || code.toString().startsWith(2) ||code.toString().startsWith(3)) === true
}
