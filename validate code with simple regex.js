//https://www.codewars.com/kata/56a25ba95df27b7743000016/train/javascript

function validateCode(code) {
    code= code + '';
    return (code.startsWith('1') || code.startsWith('2') || code.startsWith('3')) ? true : false;
}
