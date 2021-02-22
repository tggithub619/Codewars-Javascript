//https://www.codewars.com/kata/5bd776533a7e2720c40000e5

function pendulum(values) {
    values = values.sort((a, b) => a - b)
    let r = []
    let l = []
    for (let i = 0; i < values.length; i++) {
        if (i % 2 == 0) {
            r.push(values[i])
        } else {
            l.push(values[i])
        }
    }
    return values.length % 2 == 0 ? (r.reverse()).concat(l) : (r.reverse()).concat(l)

}

// doTest([4,10,9], [10,4,9])
// doTest([8,7,10,3], [8,3,7,10])
// doTest([6,6,8,5,10], [10,6,5,6,8])
// doTest([9,4,6,4,10,5], [9,5,4,4,6,10])
// doTest([4,6,8,7,5], [8,6,4,5,7])
// doTest([10,5,6,10], [10,5,6,10])

function pendulum(a) {
    let list = [], arr = [];
    a.sort((b, c) => b - c).forEach((e, i) => (i % 2 ? arr : list).push(e));
    return list.reverse().concat(arr);
}