//https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

function isPalindrome(x) {
    let y = x.toLowerCase().split('').reverse().join('');
    return x.toLowerCase() === y
}