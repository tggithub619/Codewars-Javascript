//https://www.codewars.com/kata/580878d5d27b84b64c000b51/train/javascript

function sumTriangularNumbers(n) {
    sum = 0
    if (n > 0) {
        for (let i = 1; i <= n; i++){
            sum += (i/2) * (i+1);
        }
        return sum;
    } else {
        return 0;
    }

}