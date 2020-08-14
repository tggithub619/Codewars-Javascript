//https://www.codewars.com/kata/582e0e592029ea10530009ce/solutions/javascript/me/best_practice

function duckDuckGoose(players, goose) {
    return players[(goose-1)%players.length].name
}

function duckDuckGoose(players, goose) {
    let n = goose % players.length
    return (n !== 0) ? players[ n - 1 ].name : players[ players.length - 1 ].name
}