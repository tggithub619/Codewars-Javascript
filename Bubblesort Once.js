//https://www.codewars.com/kata/56b97b776ffcea598a0006f2

function bubblesortOnce(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] > a[i + 1]) {
            [a[i], a[i + 1]] = [a[i + 1], a[i]];
        }
    }
    return a;
}