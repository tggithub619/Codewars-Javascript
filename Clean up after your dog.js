//https://www.codewars.com/kata/57faa6ff9610ce181b000028/train/javascript

function crap(x, bags, cap){
    let craps = 0;
    for (let i = 0; i < x.length; i += 1) {
        for (let j = 0; j < x[i].length; j += 1) {
            console.log('i => ', x[i], ' j => ', x[i][j]);
            if (x[i][j] === 'D') return 'DOG!!';
            if (x[i][j] === '@') craps += 1;
        }
    }
    if (craps >= bags * cap) return 'Cr@p';
    if (craps <= bags * cap) return 'Clean';
}

function crap(x, bags, cap){
    let yard = x.reduce( (a, b) => a.concat(b) );
    return yard.includes('D') ? 'Dog!!' : bags * cap - yard.filter( val => val === '@' ).length > 0 ? 'Clean' : 'Cr@p';
}