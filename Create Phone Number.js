//https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

function createPhoneNumber(num){
    return '(' + num.join('').slice(0, 3)+') ' + num.join('').slice(3, 6)+'-'+num.join('').slice(6)
}

function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";

    for(var i = 0; i < numbers.length; i++)
    {
        format = format.replace('x', numbers[i]);
    }

    return format;
}
