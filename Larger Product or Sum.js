//https://www.codewars.com/kata/5c4cb8fc3cf185147a5bdd02/solutions/javascript/me/best_practice

function sumOrProduct(array, n) {
    array = array.sort((a,b)=> b-a)
    let max = 0
    let min = 1
    for (let i = 0; i < n; i++){
        max += array[i]
    }
    for (let i = array.length-1; i >= array.length -n; i--){
        min *= array[i]
    }
    return (max > min)? "sum" : (max == min)? "same" : "product"
}