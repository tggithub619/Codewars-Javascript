//https://www.codewars.com/kata/57d29ccda56edb4187000052/solutions/javascript/me/best_practice

function rpsls(pl1,pl2){
    let arr = [ "Scissors Paper",
        "Paper Rock",
        "Rock Lizard",
        "Lizard Spock",
        "Spock Scissors",
        "Scissors Lizard",
        "Lizard Paper",
        "Paper Spock",
        "Spock Rock",
        "Rock Scissors"]
    arr = arr.map(el=> el.toLowerCase());
    let str = pl1 + ' ' +pl2;
    if (arr.includes(str)) return "Player 1 Won!";
    else if (pl1 === pl2) return "Draw!";
    else return "Player 2 Won!"
    return str;

}