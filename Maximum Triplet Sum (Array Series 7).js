//https://www.codewars.com/kata/5aa1bcda373c2eb596000112/train/javascript

function maxTriSum(num){
    let arr1 = []
    let arr2 = []
    let a = Math.max(...num)
    for( let i = 0; i<num.length; i++){
        if (num[i] !== a){
            arr1.push(num[i])
        }
    }
    let b = Math.max(...arr1)
    for( let i = 0; i<arr1.length; i++){
        if (arr1[i] !== b){
            arr2.push(arr1[i])
        }
    }
    let c = Math.max(...arr2)
    return a+b+c
}

function maxTriSum(num){
    return num.sort((a,b)=> a-b).filter((x, i) => num.lastIndexOf(x) === i).slice(-3).reduce((a,b)=> a+b)
}
