//https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

function validatePIN (pin) {
    for (let i in pin) {
        if (isNaN(pin[i]) || pin[i] === '\n') return false;
    }
    if (+pin % 1 !== 0 || +pin < 0) return false;
    else if (pin.length === 4 || pin.length === 6) return true;
    return false;

}

function validatePIN (pin) {
    let arr = pin.split()
    return (+pin < 0 || isNaN(+pin)) ? false : (pin.includes('\n') || pin.includes('.') || pin.includes('+')) ? false : (pin.length == 4 || pin.length == 6) ? true :false
}

