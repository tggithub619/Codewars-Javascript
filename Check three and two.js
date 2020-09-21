//https://www.codewars.com/kata/5a9e86705ee396d6be000091/solutions/javascript

function checkThreeAndTwo(arr) {
    let a=0,b=0,c=0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 'a') a++;
        if (arr[i] === 'b') b++;
        if (arr[i] === 'c') c++;
    }
    return (a==3 || b==3 || c==3 ) && (a==2 || b==2 || c==2)
}

function checkThreeAndTwo(arr) {
    let res = [];
    res.push(arr.filter(x => x === 'a').length)
    res.push(arr.filter(x => x === 'b').length)
    res.push(arr.filter(x => x === 'c').length)
    return res.includes(2) && res.includes(3);
}

function checkThreeAndTwo(arr) {
    let obj ={};
    for (let el of arr){
        if (obj[el]) obj[el] ++;
        else obj[el] = 1;
    }
    let a = Object.values(obj).filter(el=>el<2 || el >3)
    return a.length === 0;
}
