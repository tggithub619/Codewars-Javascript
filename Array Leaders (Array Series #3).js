//https://www.codewars.com/kata/5a651865fd56cb55760000e0

var arrayLeaders = num => {
    let res = []
    for (let i =0; i<num.length; i++){
        if (num[i] > num.slice(i+1).reduce((a,b)=> a+b, 0)){
            res.push(num[i])
        }
    }
    return res
}

//Test.assertDeepEquals(arrayLeaders([1,2,3,4,0]), [4])
//     Test.assertDeepEquals(arrayLeaders([16,17,4,3,5,2]), [17,5,2])

var arrayLeaders = num => {
    return num.filter((el,i,arr)=>el>arr.slice(i+1).reduce((a,b)=>a+b,0))
}