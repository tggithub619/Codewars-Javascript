//https://www.codewars.com/kata/586560a639c5ab3a260000f3

function rotate(str){
    let res = []
    for (let i =0; i < str.length; i++){
        str = str.slice(1) + str[0];
        res.push(str);
    }
    return res

}

//rotate("Hello") // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]

function rotate(str){
    return str.split('').map((x,i) => str.slice(i+1) + str.slice(0,i+1))
}