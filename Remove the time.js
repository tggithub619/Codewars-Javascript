//https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e/train/javascript

function shortenToDate(longDate) {
    return longDate.split(',')[0];
}

function shortenToDate(longDate) {
    return longDate.slice(0, longDate.indexOf(","));
}

function shortenToDate(longDate) {
    let res = [];
    let arr = longDate.split("");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ","){
            break;
        }
        res.push(arr[i]);
    }
    return res.join("");
}

function shortenToDate(longDate) {
    let i = 0;
    while (longDate[i] !== ',') {
        i++;
        continue;
    }
    return longDate.slice(0, i)
}
