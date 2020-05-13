https://www.codewars.com/kata/5865cff66b5699883f0001aa/train/javascript

function toTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);

    return `${h} hour(s) and ${m} minute(s)`;

}
console.log(toTime(323500)); // '89 hour(s) and 51 minute(s)'

