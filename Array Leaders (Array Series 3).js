//https://www.codewars.com/kata/5a651865fd56cb55760000e0/train/javascript

var arrayLeaders = num => {
    return num.filter((el,i,arr)=>el>arr.slice(i+1).reduce((a,b)=>a+b,0))
}

var arrayLeaders = num => {
    const right = []
    let s = 0
    for (let i = num.length - 1; i>= 0;i--){
        right[i] = s
        s += num[i]
    }
    return num.filter((el, i) => el>right[i])
}
