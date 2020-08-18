//https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

function isPalindrome(x) {
    let y = x.toLowerCase().split('').reverse().join('');
    return x.toLowerCase() === y
}

function isPalindrome(x) {
    x = x.toLowerCase();
    let y = '';
    for (let i = x.length - 1; i >= 0; i--) {
        y= y +x[i];
    }
    return x === y.toLowerCase()
}