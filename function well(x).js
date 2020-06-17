//https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript

function well(x){
    let res = x.filter(el => el === 'good').length;
    if (res > 2) return 'I smell a series!';
    if (res > 0) return 'Publish!';
    return 'Fail!'
}

function well(x){
    let good = x.filter(el => el ===  'good');
    return good.length === 0? 'Fail!': good.length > 2? 'I smell a series!': 'Publish!';
}