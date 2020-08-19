//https://www.codewars.com/kata/595970246c9b8fa0a8000086/train/javascript

function capitalizeWord(word) {
    let first = []
    first.push(word[0].toUpperCase());
    return first.concat(word.split('').splice(1)).join('');
}

function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function capitalizeWord(word) {
    return word.replace(word[0], word[0].toUpperCase())
}

function capitalizeWord(word) {
    var str = word[0].toUpperCase();
    for (let i = 1; i<word.length; i++) {
        str += word[i];
    }
    return str;
}