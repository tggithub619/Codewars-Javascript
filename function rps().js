//https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

function rps(p1, p2) {
    let rules = {
        scissors : "paper",
        rock : "scissors",
        paper : "rock",
    }

    if (rules[p1] === p2)  return "Player 1 won!";
    else if (p1 === p2) return "Draw!";
    else return "Player 2 won!"

};