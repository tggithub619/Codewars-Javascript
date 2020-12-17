//https://www.codewars.com/kata/56f7493f5d7c12d1690000b6

function mean(lst){
    let n= lst.filter(el => !isNaN(el))
    let s= lst.filter(el => isNaN(el))
    let mean= n.reduce((a,b)=>a + parseFloat(b),0)/10;
    return [mean,s.join('')];
}

function mean(lst){
    let sum  = 0;
    let str = "";
    for (let i =0; i< lst.length; i++){
        if (!isNaN(+lst[i])) {
            sum+= +lst[i]
        } else {
            str += lst[i];
        }
    }
    return [sum/10, str]
}

function mean(lst){
    let sum  = 0;
    let str = "";
    lst.forEach(el => (!isNaN(el))? sum += +el : str += el);
    return [sum/10, str]
}