//https://www.codewars.com/kata/5436f26c4e3d6c40e5000282

function sumOfN(n) {
    if(n===0) return [0];
    let resP = [];
    let resN = [];
    let sum = 0;
    if(n < 0) {
        for (let i = 0; i <= Math.abs(n); i++) {
            sum -= i;
            resN.push(sum)
        }
        return resN;
    }if(n > 0) {
        for (let i = 0; i <= Math.abs(n); i++) {
            sum += i
            resP.push(sum)
        }
        return resP;
    }
}

//sumOfN(-6), [0, -1, -3, -6, -10, -15, -21]

function sumOfN(n) {
    let arr = [0];
    let count = 0;
    let index = Math.abs(n);
    for(let i = 1; i <= index; i++){
        count+= i;
        if (n < 0) {
            arr.push(-count);
        } else {
            arr.push(count);
        }
    }
    return arr;
};