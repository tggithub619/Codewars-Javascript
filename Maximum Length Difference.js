//https://www.codewars.com/kata/5663f5305102699bad000056/solutions/javascript/me/best_practice

function mxdiflg(a1, a2) {
    let max1 = [];
    let max2 = [];
    for (let i = 0; i < a1.length; i++) {
        max1.push(a1[i].length);
    }
    for (let i = 0; i < a2.length; i++) {
        max2.push(a2[i].length);
    }
    return (max1.length === 0 || max2.length === 0) ? -1 : Math.max(( Math.max(...max1) -  Math.min(...max2)), ( Math.max(...max2) -  Math.min(...max1)));
}

function mxdiflg(a1, a2) {
    let m1 = a1.map(el => el.length);
    let m2 = a2.map(el => el.length);
    return  (m1.length === 0 || m2.length === 0) ? -1 : Math.max(( Math.max(...m1) -  Math.min(...m2)), ( Math.max(...m2) -  Math.min(...m1)));
}
