//https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

function noSpace(x){
    return x.split(' ').join('');
}

function noSpace(x){
    let res = ''
    for ( let i = 0; i < x.length; i++){
        if (x[i] !== ' '){
            res+=x[i]
        }
    }
    return res
}

function noSpace(x){
    return x.replace(/\s/g, '')
}
