//https://www.codewars.com/kata/570e8ec4127ad143660001fd/train/javascript

function billboard(name, price = 30){
    let res =0;
    let i =0;
    while ( i < name.length){
        res+= price;
        i++;
    }
    return res
}


function billboard(name, price = 30){
    return  name.repeat(price).length
}