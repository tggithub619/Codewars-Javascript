//https://www.codewars.com/kata/56f699cd9400f5b7d8000b55/train/javascript

function fixTheMeerkat(arr) {
    return arr.reverse()
}

function fixTheMeerkat(arr) {
    //your code here
    var newarr=[];
    for(var i=arr.length-1;i>=0;i--)
    {
        newarr.push(arr[i]);
    }
    return newarr;
}