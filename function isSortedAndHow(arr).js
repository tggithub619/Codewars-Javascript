//https://www.codewars.com/kata/580a4734d6df748060000045/solutions/javascript/me/best_practice

function isSortedAndHow(arr) {
    let res = 0;
    let n = 0;
    for(let i = 0; i<arr.length; i++) {
        if(arr[i] < arr[i+1])
            res++;
        else if (arr[i] > arr[i+1])
            n++;
    }
    if(res > 0 && n === 0) return "yes, ascending";
    else if(res === 0 && n > 0) return "yes, descending";
    else return "no";
}

function isSortedAndHow(array) {
    console.log (array);
    let asc = 0;
    let des = 0;
    for (let i=0; i<array.length-1; i++)
    {
        if (array[i]<=array[i+1])
            asc++;

        if (array[i]>=array[i+1])
            des++;

    }

    if (asc===array.length-1)
        return "yes, ascending";

    if (des===array.length-1)
        return "yes, descending";

    if ((asc !== array.length-1) || (des !== array.length-1) )
        return "no";
}
