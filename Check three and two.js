//https://www.codewars.com/kata/5a9e86705ee396d6be000091/solutions/javascript

function checkThreeAndTwo(arr) {
    let a=0,b=0,c=0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 'a') a++;
        if (arr[i] === 'b') b++;
        if (arr[i] === 'c') c++;
    }
    return (a==3 || b==3 || c==3 ) && (a==2 || b==2 || c==2)
}
