//https://www.codewars.com/kata/57ed56657b45ef922300002b

function broken(x){
    let res = ''
    for(let i = 0; i < x.length; i++) {
        res += x[i] === '0' ? '1' : '0';
    }
    return res;

}


function broken(x){
    return x.split('').map(a => a == "0" ? "1" : "0").join('');
}