// https://www.codewars.com/kata/58c9322bedb4235468000019/solutions/javascript/me/best_practice

function isVeryEvenNumber(n) {
    while (n>9){
        let sum = 0;
        let str = String(n)
        for (let i = 0; i<str.length; i++){
            sum += +str[i]
        }
        n = sum
    }
    return n%2===0;
}
