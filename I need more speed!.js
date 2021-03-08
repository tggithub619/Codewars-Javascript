//https://www.codewars.com/kata/55de9c184bb732a87f000055

function reverse(arr) {
    for (let i = 0; i < arr.length/2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}


//[[[1,2,3,4,5],[5,4,3,2,1]],
//   [['hello','world','how','are','you','?'],['?','you','are','how','world','hello']],
//   [[{a:1},{b:2}],[{b:2},{a:1}]]

