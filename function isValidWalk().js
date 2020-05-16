//https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(arr) {
    if (arr.length !== 10) return false;
    let ns = 0;
    let we = 0;
    for (let i = 0; i < arr.length; ++i){
        if (arr[i] === 'n') ns++;
        else if (arr[i] === 's') ns--;
        else if (arr[i] === 'w') we++;
        else if (arr[i] === 'e') we--;
    }
    return ns === 0 && we === 0;
}
