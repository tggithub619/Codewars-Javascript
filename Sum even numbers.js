//https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3/train/javascript

function sumEvenNumbers(input) {
    let sum = 0
    for (let i = 0; i <= input.length; i++){
        if (input[i] %2 === 0){
            sum += input[i]
        }

    }
    return sum

}



sumEvenNumbers = input => input.filter(x => x % 2 == 0).reduce((x, y) => x + y, 0)