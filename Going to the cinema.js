//https://www.codewars.com/kata/562f91ff6a8b77dfe900006e/train/javascript

function movie(card, ticket, perc) {
    let a = 0;
    let b =  card;
    let ticketB = ticket;
    let count = 0;
    while (Math.ceil(a)<= Math.ceil(b)){
        a+=ticket;
        ticketB = ticketB * perc;
        b+= ticketB;
        count++;
    }
    return count;
};