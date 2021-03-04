//https://www.codewars.com/kata/5639bdcef2f9b06ce800005b

function makeString(s){
    return s.split(" ").map(el => el[0]).join("");
}


//Test.assertEquals(makeString("sees eyes xray yoat"), "sexy",
//Test.assertEquals(makeString("brown eyes are nice"), "bean",