//https://www.codewars.com/kata/5a084a098ba9146690000969

function timeConvert(num) {
    if (num <= 0){return "00:00"}
    let h = 0
    while (num>=60){
        num -= 60
        h++
    }
    return ((h<= 9)? "0"+h.toString():h.toString()) + ":" + ((num<=9)? "0"+num.toString():num.toString())
}

//Test.assertEquals(timeConvert(0), "00:00");
// Test.assertEquals(timeConvert(-6), "00:00");
// Test.assertEquals(timeConvert(8), '0'+0+':'+'0'+8);
// Test.assertEquals(timeConvert(32), '0'+0+':'+32);
// Test.assertEquals(timeConvert(75), '0'+1+':'+15);
// Test.assertEquals(timeConvert(63), '0'+1+':'+'0'+3);
// Test.assertEquals(timeConvert(134), '0'+2+':'+14);
// Test.assertEquals(timeConvert(180), '0'+3+':'+'0'+0);
// Test.assertEquals(timeConvert(970), 16+':'+10);
// Test.assertEquals(timeConvert(565757), 9429+':'+17);

function timeConvert(num) {
    return num > 0 ? `${(Math.floor(num / 60) + "").padStart(2, "0")}:${(num % 60 + "").padStart(2, "0")}` : "00:00";
}