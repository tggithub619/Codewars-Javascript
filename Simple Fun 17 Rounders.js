//https://www.codewars.com/kata/58846d50f54f021d90000012

function rounders(v) {
    let l = v.toString().length;
    let arr = v.toString().split('');
    for (let i = l - 1;i > 0;i--){
        if (arr[i] >= 5) {
            arr[i - 1] = (+arr[i - 1] + 1) + '';
        }
        arr[i] = 0;
    }
    return +arr.join('');
}

//Test.assertEquals( rounders(15) , 20)
//
// Test.assertEquals( rounders(1234) , 1000)
//
// Test.assertEquals( rounders(1445) , 2000)
//
// Test.assertEquals( rounders(14) , 10)