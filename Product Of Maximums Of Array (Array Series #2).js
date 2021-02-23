//https://www.codewars.com/kata/5a63948acadebff56f000018

function maxProduct(numbers, size){
    let num = numbers.sort((a,b) => b-a)
    let res = []
    for (let i =0; i<size; i++){
        res.push(num[i])
    }
    return res.reduce((a,d)=> a*d,1)
}

//Test.assertEquals(maxProduct([4,3,5], 2), 20);
//   Test.assertEquals(maxProduct([10,8,7,9], 3), 720);
//   Test.assertEquals(maxProduct([8,6,4,6], 3), 288);
//   Test.assertEquals(maxProduct([10,2,3,8,1,10,4], 5), 9600);

function maxProduct(numbers, size){
    return numbers.sort((a,b) => b-a).slice(0,size).reduce((acc,n) => acc*n);
}

function maxProduct(numbers, size){
    let num = numbers.sort((a,b) => b-a)
    let res = 1
    for (let i =0; i<size; i++){
        res*= num[i]
    }
    return res
}