https://www.codewars.com/kata/57a77726bb9944d000000b06

function mango(quantity, price){
    return price * (quantity - Math.floor(quantity / 3));
}

yesterday
Refactor

function mango(quantity, price){
    return (Math.floor(quantity/3)*2* price) + (quantity % 3 * price);

}

yesterday
Refactor

function mango(quantity, price){
    return ((quantity-(Math.floor(quantity/3)))*price);

}

yesterday
Refactor

function mango(quantity, price){
    return Math.floor(quantity/3)*price*2+(quantity-3*Math.floor(quantity/3))*price;
}

