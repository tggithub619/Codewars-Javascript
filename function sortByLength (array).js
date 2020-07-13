//https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript

function sortByLength (array) {
    return array.sort((a,b)=>a.length-b.length)
};


function sortByLength (array) {
    for (let i = 0; i < array.length; i++) {
        let minIdx = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[minIdx].length > array[j].length) {
                minIdx = j;
            }
        }
        let temp = array[i];
        array[i] = array[minIdx];
        array[minIdx] = temp;
    }
    return array;
}