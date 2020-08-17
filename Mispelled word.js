//https://www.codewars.com/kata/5892595f190ca40ad0000095/solutions/javascript/me/best_practice

var mispelled = function(word1, word2){
    if (Math.abs(word1.length -word2.length) > 1) return false;
    let count = 0;
    for (let i = 0; i< word1.length; i++){
        if (word2.includes(word1[i]))  count++;
    }
    return (count === word1.length -1 || count === word1.length)
}
