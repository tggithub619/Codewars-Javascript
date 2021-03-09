//https://www.codewars.com/kata/545a4c5a61aa4c6916000755

var gimme = function (arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== max && arr[i] !== min){
            return i;}
    }
};

//Test.assertEquals(gimme([2, 3, 1]), 0, 'Finds the index of middle element');
// Test.assertEquals(gimme([5, 10, 14]), 1, 'Finds the index of middle element')

var gimme = function (arr) {
    return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
};


