//https://www.codewars.com/kata/5533c2a50c4fea6832000101/train/javascript

function createDict(keys, values){
    let res = {};
    for (let i = 0; i < keys.length; i++) {
        if (i< values.length ){
            res[keys[i]] = values[i];
        } else res[keys[i]] = null;
    }
    return res;
}
