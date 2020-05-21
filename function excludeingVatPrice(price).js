//https://www.codewars.com/kata/5890d8bc9f0f422cf200006b/train/javascript

//return price without vat
function excludingVatPrice(price){
    return (price === null) ? -1: +(price - (price / 115) * 15).toFixed(2);
}

function excludingVatPrice(price){
    // your code
    return price === null ? -1 : +(price / 1.15).toFixed(2);
}