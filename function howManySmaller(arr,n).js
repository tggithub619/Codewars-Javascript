//https://www.codewars.com/kata/57256064856584bc47000611/train/javascript

function howManySmaller(arr,n){
    let newArr = arr.map(el=> el.toFixed(2))
    return newArr.filter(el => el < n).length

}

function howManySmaller(arr,n){
    let newArr =[]
    for (let i = 0; i < arr.length; i++){
        if ( arr[i].toFixed(2)<n) newArr.push(arr[i])
    }
    return newArr.length;
}

