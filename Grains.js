//https://www.codewars.com/kata/55f7eb009e6614447b000099/train/javascript

function square(number){
    return Math.pow(2, number - 1);
}


function square(number){
    let res= 1;
    for(let i = 1; i<number; i++){
        res *= 2
    }
    return res;
}
