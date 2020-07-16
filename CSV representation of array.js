//https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036/train/javascript

function toCsvText(arr) {
    return arr.join('\n');
}

function toCsvText(array) {
    let str = '';
    for (let i = 0;i < array.length;i++){
        if (i !== array.length-1){
            str += array[i].join() + '\n';
        } else {
            str += array[i].join();
        }
    }
    return str;
}