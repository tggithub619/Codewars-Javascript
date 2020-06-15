//https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript

function warnTheSheep(queue) {
    const index=queue.indexOf('wolf')
    return index===queue.length-1?"Pls go away and stop eating my sheep"
        :`Oi! Sheep number ${queue.length-1-index}! You are about to be eaten by a wolf!`
}