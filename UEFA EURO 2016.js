//https://www.codewars.com/kata/57613fb1033d766171000d60/train/javascript

function uefaEuro2016(teams, scores){
    let winner =  [];
    let str = '';
    if (scores[0]> scores[1]){
        winner.push(teams[0]);
        str =`${winner.toString()} won!`;
    } else if (scores[0]<scores[1]) {
        winner.push(teams[1]);
        str = `${winner.toString()} won!`;
    }else str = 'teams played draw.';
    return `At match ${teams.slice(0,1)} - ${teams.slice(1)}, ${str}`
}
