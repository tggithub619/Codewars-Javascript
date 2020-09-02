//https://www.codewars.com/kata/588a7d45019c42be61000009/train/javascript

function interweave(s1, s2) {
    s1 = s1.split('');
    s2 = s2.split('');
    let s3 = s1.concat(s2);
    let newArr = [];
    for (let i = 0; i < s3.length; i++) {
        if (i % 2 === 0) {
            newArr.push(s1.shift());
        } else {
            newArr.push(s2.shift());
        }
    }
    return newArr.filter(el => !Number(el) && el != '0').join('');
}
