//https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript

function cleanString(s) {

    let arr = [];

    for(let i = 0; i < s.length; i++){
        if(s[i] === '#'){
            arr.pop()
            continue;
        }

        arr.push(s[i]);
    }
    let n = '';
    for(let i = 0; i < arr.length; i++){
        n += arr[i];

    }
    return n;
};
