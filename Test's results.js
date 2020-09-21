//https://www.codewars.com/kata/599db0a227ca9f294b0000c8/solutions/javascript/me/best_practice

function testResult(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    let sumAvr = +(sum / array.length).toFixed(3);
    let obj = {
        'h': 0,
        'a': 0,
        'l': 0,
    }
    for (let el of array){
        if(el >= 9) obj['h']++
        else if(el >= 7) obj['a']++
        else obj['l']++
    }
    return (obj['a'] + obj['l'] === 0) ? [sumAvr, obj, 'They did well'] : [sumAvr, obj];
}

function testResult(array) {
    let sum = 0;
    let dic = {"h": 0, "a": 0, "l": 0};
    for (let s of array) {
        sum += s;
        dic[s >= 9 ? "h" : s >= 7 ? "a" : "l"]++;
    }
    return [+(sum / array.length).toFixed(3), dic].concat(dic["h"] === array.length ? ["They did well"] : []);
}

function testResult(arr) {
    let avg = (arr.reduce((a,b) => a + b) / arr.length).toFixed(3);
    let h = arr.filter(a => a > 8).length;
    let l = arr.filter(b => b < 7).length;
    let a = arr.filter(c => c > 6 && c < 9).length;
    let result = [+avg, {'h': h, 'a': a, 'l': l }];
    return (l === 0 && a === 0 && h > 0) ? result.concat(['They did well']) : result;
}
