//https://www.codewars.com/kata/56e2f59fb2ed128081001328/train/javascript

function printArray(array){
    return array.join()
}
function printArray(array){
    let str = '';
    for (let i = 0; i< array.length; i++){
        if (i<array.length-1 ){
            str+= array[i] +',';
        } else str+= array[i]
    }
    return str;
}