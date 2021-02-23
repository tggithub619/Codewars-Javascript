//https://www.codewars.com/kata/5bdcd20478d24e664d00002c

function wheatFromChaff(v) {
    let i = 0;
    let j = v.length - 1;
    while (i !== j) {
        if (v[i] > 0) {
            if (v[j] < 0) {
                [v[i], v[j]] = [v[j], v[i]];
            } else {
                j--;
                continue}}
        i++}
    return v;
}

//doTest([2,-4,6,-6], [-6,-4,6,2])
//         doTest([7,-3,-10], [-10,-3,7])
//         doTest([7,-8,1,-2], [-2,-8,1,7])
//         doTest([8,10,-6,-7,9], [-7,-6,10,8,9])
//         doTest([-3,4,-10,2,-6], [-3,-6,-10,2,4])
//         doTest([2,-6,-4,1,-8,-2], [-2,-6,-4,-8,1,2])
