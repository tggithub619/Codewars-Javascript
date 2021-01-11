//https://www.codewars.com/kata/586566b773bd9cbe2b000013/

function noRepeat(str) {
    arr = str.split('')
    arr = arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el));
    return arr[0].toString()
}

//Test.assertEquals(noRepeat("aabbccdde"),"e");
// Test.assertEquals(noRepeat("wxyz"),"w");
// Test.assertEquals(noRepeat("testing"), "e");

function noRepeat(str) {
    return str.split("").filter((x,i)=>str.indexOf(x)===str.lastIndexOf(x))[0];
}

function noRepeat(str) {
    return [...str].find((char, i, arr) =>
        arr.indexOf(char) === arr.lastIndexOf(char)
    );
}