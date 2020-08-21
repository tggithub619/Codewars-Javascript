//https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript

function stringy(size) {
    let str='';
    for( let i=1; i<=size; i++ )
        str+=i%2;
    return str;
}

function stringy(size) {
    return ''.padStart(size,'10');
}

function stringy(size) {
    return '10'.repeat(size).slice(0,size);
}