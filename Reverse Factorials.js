//https://www.codewars.com/kata/58067088c27998b119000451/train/javascript

function reverseFactorial(num) {
    let count = 1
    while (num > 1){
        count++
        num = num / count;
    }
    return num === 1? count +"!" : "None";
}