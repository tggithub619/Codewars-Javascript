//https://www.codewars.com/kata/5944367162ed20be2a00005d/train/javascript

function vowelFilter (letters) {
    var vowels = ["a", "e", "i", "o", "u"];
    let res = []
    for(let i =0; i < letters.length; i++){
        if(!vowels.includes(letters[i])) {
            res.push(letters[i])
        }}
    return res
};
