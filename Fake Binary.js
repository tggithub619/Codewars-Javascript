//https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

function fakeBin(x){
    return ''+x.replace(/[0-4]/g, '0').replace(/[5-9]/g, '1')
}

function fakeBin(x) {
    return x.split('').map(el => (el< 5) ? 0 : 1).join('');
}

function fakeBin(str){
    let res = "";
    for(let i=0; i<str.length; i++){
        if(str[i] >= 5){
            res += "1";
        }
        else{
            res += "0";
        }
    }
    return res;
}
