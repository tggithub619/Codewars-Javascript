//https://www.codewars.com/kata/57d001b405c186ccb6000304/train/javascript

function iTri(s){
    let dist = 2.4 + 112 + 26.2;
    let obj = {};
    if (s === 0){
        return 'Starting Line... Good Luck!'
    } else if (s < 2.4){
        obj['Swim'] = `${(dist-s).toFixed(2)} to go!`
    } else if (s < 114.4) {
        obj['Bike'] = `${(dist-s).toFixed(2)} to go!`
    } else if (s < dist - 10){
        obj['Run'] = `${(dist-s).toFixed(2)} to go!`
    } else if (s < dist){
        obj['Run'] = 'Nearly there!'
    } else {
        return "You're done! Stop running!"
    }
    return obj;
}

function iTri(s){
    return (s >= 140.6) ? `You're done! Stop running!` : s ? {[(s > 114.4) ? `Run` : (s > 2.4) ? `Bike` : `Swim`]: (s > 130.6) ? `Nearly there!` : (140.6 - s).toFixed(2) + ` to go!`} : `Starting Line... Good Luck!`;
}

function iTri(s) {
    let d = 2.4 + 112 + 26.2;
    if (s === 0) return 'Starting Line... Good Luck!';
    if (s <= 2.4) return {'Swim': `${(d - s).toFixed(2)} to go!`};
    if (s <= 114.4) return {'Bike': `${(d - s).toFixed(2)} to go!`};
    if (d - s > 10) return {'Run': `${(d - s).toFixed(2)} to go!`};
    if (s < d) return {'Run': 'Nearly there!'};
    else return "You're done! Stop running!";
}