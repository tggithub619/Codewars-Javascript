//https://www.codewars.com/kata/59a602dc57019008d900004e

function transform(array) {
    let newArray = []
    for(let i = 0; i < array.length; i++){
        newArray.push(String(array[i]))
    }
    return newArray.join("")
}

function transform(array) {
    return array.map(String).join('');
}

function transform(array) {
    let str = '';
    for(let el of array){
        str += el
    }
    return str;
}

//Test.assertEquals(transform(["BmX", false, 784]), "BmXfalse784")