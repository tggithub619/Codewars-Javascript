//https://www.codewars.com/kata/57faece99610ced690000165/train/javascript

function remove(s){
    return s.replace(/!*$/g,'')
}

function remove(s){
    let arr2 = [];
    let arr = s.split('')
    for(let i = arr.length; i > 0; i--){
        if(arr[arr.length-1] === '!') arr.pop();
    }
    return arr.join('')
}

function remove(s){
    let res = s;
    let i = s.length-1;
    while (s[i] === "!") {
        res = res.slice(0, -1);
        i --;
    }
    return res;

}

function remove(s){
   while (s.endsWith('!')){
        s = s.slice(0,s.length-1);
    }
    return s;
}
