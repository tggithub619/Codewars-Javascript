//https://www.codewars.com/kata/56f173a35b91399a05000cb7/train/javascript

function findLongest(str) {
    return Math.max(...str.split(' ').map(el => el.length))
}

function findLongest(str) {

    var spl = str.split(" ");
    var longest = 0;

    for (var i = 0; i < spl.length; i++) {
        if (spl[i].length > longest) {
            longest = spl[i].length;
        }
    }
    return longest;
}
