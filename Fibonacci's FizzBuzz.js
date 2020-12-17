//https://www.codewars.com/kata/57bf599f102a39bb1e000ae5/train/javascript

var fibsFizzBuzz = function(n) {
    if (n === 1) return [1]
    let arr = [1,1]
    for (let i = 0; i < n - 2; i++) {
        arr.push(arr[i] + arr[i + 1])
    }
    return arr.map(n =>!(n % 15) ? 'FizzBuzz': !(n % 3) ? 'Fizz' : !(n % 5) ? 'Buzz': n)
}