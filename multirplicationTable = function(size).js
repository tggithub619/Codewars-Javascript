//https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript

multiplicationTable = function(size) {
    let arr = [];
    for (let i =1; i<=size; i++){
        let newarr =[];
        arr.push(newarr);
        for (let j = 1; j<=size; j++){
            newarr.push(i*j);
        }

    }
    return arr;
}