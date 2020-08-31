//https://www.codewars.com/kata/525f039017c7cd0e1a000a26/train/javascript

var palindromeChainLength = function(n) {
    let count = 0;
    let rev = parseInt(("" + n).split('').reverse().join(''));
    checkPalindrome(n);

    function checkPalindrome(n){
        if (n !== rev) {
            count++;
            n += rev;
            rev= parseInt(("" + n).split('').reverse().join(''));
            return checkPalindrome(n);
        }
    }
    return count;
};
