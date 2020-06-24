//https://www.codewars.com/kata/5a0b4dc2ffe75f72f70000ef/solutions/javascript/following/best_practice

function findChildren(sl, ch) {

    let res = sl.filter(el=> ch.find(name => name === el)).sort();

    return res.filter((el,i) => i === res.indexOf(el))
}

const findChildren = (santasList, children) => {
    const arr = [];
    for (const item of santasList) {
        for (const child of children) {
            if (item === child && !arr.includes(item)) {
                arr.push(item)
            }
        }
    }
    return arr.sort();
}
function findChildren(santasList, children) {

    return santasList.filter( (el, i) => children.includes(el) && santasList.indexOf(el) === i).sort();
}