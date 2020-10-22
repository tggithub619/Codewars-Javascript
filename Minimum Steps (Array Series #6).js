//https://www.codewars.com/kata/5a91a7c5fd8c061367000002/solutions/javascript/me/best_practice

function minimumSteps(num, v){
    let arr = num.sort((a,b)=> a-b)
    let sum = 0
    for ( let i = 0; i < arr.length; i++){
        sum+=arr[i]
        if ( sum >= v) return i
    }

}