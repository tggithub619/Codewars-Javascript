//https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript

var capitals = function (word) {
    let arr = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) arr.push(i)
    }
    return arr
};

var capitals = function (word) {
    return word.split('').map((el, i) => (el.toUpperCase() === el)? i: "*").filter(i => 'number' === typeof i)
};