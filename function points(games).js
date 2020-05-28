//https://www.codewars.com/kata/5bb904724c47249b10000131/solutions/javascript

function points(games) {
    let res = 0;

    for (let i = 0; i < games.length; i++){

        if (+games[i][0] > +games[i][2]) res = res + 3;
        else if (+games[i][0] == +games[i][2]) res = res +1;


    }

    return res;
}
console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","3:3"]));

