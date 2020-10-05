//https://www.codewars.com/kata/5a651865fd56cb55760000e0/train/javascript

var arrayLeaders = num => {

    return num.filter((el,i,arr)=>el>arr.slice(i+1).reduce((a,b)=>a+b,0))
}
