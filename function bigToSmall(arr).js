//https://www.codewars.com/kata/5731861d05d14d6f50000626/train/javascript

function bigToSmall(arr){
    return [].concat(...arr).sort((a,b)=>b-a).join('>');
}

function bigToSmall(arr){
    let res = [];
    for (let i = 0; i<arr.length; i++) {
        res=res.concat(arr[i]);
    }
    res = res.sort((a,b)=>b-a).join('>');
    return res;
}