//https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

function array_diff(a, b) {
    return a.filter(el => !b.includes(el));
}