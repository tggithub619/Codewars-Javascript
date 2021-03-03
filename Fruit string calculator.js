//https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3

function calculate(string) {
    let arr = string.split(' ').filter(el=> +el).map(el=>+el);
    return string.includes('loses')? arr[0]-arr[1] : arr[0]+arr[1]
}

Test.assertEquals(calculate("Panda has 48 apples and loses 4"), 44);
Test.assertEquals(calculate("Jerry has 34 apples and gains 6"), 40);

function calculate(string) {
    let str = string.split(' ');
    let res = [];
    for(let i = 0; i < str.length; i++){
        if(isNaN(+(str[i])) == false){
            res.push(str[i]);
        }

    }
    return string.includes('loses')? +res[0] - +res[1] : +res[0] + +res[1];
}