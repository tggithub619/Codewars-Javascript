


function bubblesortOnce(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] > a[i + 1]) {
            [a[i], a[i + 1]] = [a[i + 1], a[i]];
        }
    }
    return a;
}