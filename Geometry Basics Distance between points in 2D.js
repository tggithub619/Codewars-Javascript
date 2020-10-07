//https://www.codewars.com/kata/58dced7b702b805b200000be/train/javascript

function distanceBetweenPoints(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
}

function distanceBetweenPoints(a, b) {
    return ((b.x - a.x) ** 2 + (b.y - a.y) ** 2) ** 0.5
}
