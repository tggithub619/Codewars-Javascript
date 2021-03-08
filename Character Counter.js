//https://www.codewars.com/kata/56786a687e9a88d1cf00005d

function validateWord(s){
    s = s.toLowerCase();
    let arr = [...s].filter((el, i) => s.indexOf(el) === s.lastIndexOf(el));
    return (arr.length === 0 || arr.length === s.length) ? true : false;
}

//Test.assertEquals(validateWord("abcabc"),true, "The word was: \"abcabc\" \n");
//     Test.assertEquals(validateWord("Abcabc"),true, "The word was: \"Abcabc\" \n");
//     Test.assertEquals(validateWord("abc123"),true, "The word was: \"abc123\" \n");
//     Test.assertEquals(validateWord("abcabcd"),false, "The word was: \"abcabcd\" \n");
//     Test.assertEquals(validateWord("abc!abc!"),true, "The word was: \"abc!abc!\" \n");
//     Test.assertEquals(validateWord("abc:abc"),false, "The word was: \"abc:abc\" \n");
//   });

function validateWord(s){
    var counts = {};
    for(var c of s.toLowerCase()){
        if(counts[c] === undefined){counts[c] = 0;}
        counts[c]++;
    }
    return Math.max(...Object.values(counts)) === Math.min(...Object.values(counts));
}
