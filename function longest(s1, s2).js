//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

function longest(s1, s2) {
    return  [...new Set(s1+s2)].sort().join('')
}

function longest(s1, s2) {
    let res = (s1 + s2);
    let arr = res.split('')
//   let arr= [];
//   for ( let i = 0; i< res.length; i++){
//     arr.push(res[i])
//   }
    arr = arr.filter((el, i) => arr.indexOf(el) === i).sort().join('')

    // let str = '';
    //   for (let i = 0; i < arr.length; i++){
//     str = str +arr[i]
//   }
    return arr;
}
function longest(s1, s2) {
    let s = (s1 + s2).split('').sort();
    return s.filter((el,i) => i ===s.indexOf(el)).join('')
}