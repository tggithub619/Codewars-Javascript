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

function toCsvText(array) {
    let str = '';
    for (let i = 0; i < array.length; i++) {
        str += array[i][0];
        for (let j = 1; j < array[i].length; j++) {
            str += ',' + array[i][j];
        }
        if (i != array.length - 1)
            str += "\n";
    }
    return str
}