//https://www.codewars.com/kata/5b047875de4c7f9af800011b/train/javascript

function sentence(List) {
    let res = List.map(el => Object.entries(el)[0]).sort((a, b) => a[0] - b[0])
    return res.map(el => el[1]).join(' ')
}

function sentence(List) {
    let obj = {}
    let res = ''
    for (let i = 0; i < List.length; i++) {
        for (let key in List[i]){
            obj[key]=List[i][key]
        }
    }
    let arr = Object.entries(obj).map(el => el[0] = +el[0]).sort((a,b) => a-b);
    for (let i = 0; i < arr.length; i++){
        res += obj[arr[i]] + ' ';
    }
    return res.trim();
}
