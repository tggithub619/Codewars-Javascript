//https://www.codewars.com/kata/602afedfd4a64d0008eb4e6e

function getDay(day, isLeap){
    if (day > 365 + isLeap) return "wrong day";
    let x = [31, 28 + isLeap, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const m = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    for (let i = 0; i < x.length; i++) {
        if (day <= x[i]) return `${m[i]}, ${day}`;
        day -= x[i];
    }
}

// expect(getDay(15, false)).to.equal("January, 15")
//     expect(getDay(41, false)).to.equal("February, 10")
//     expect(getDay(59, false)).to.equal("February, 28")
//     expect(getDay(60, false)).to.equal("March, 1")
//     expect(getDay(60, true)).to.equal("February, 29")
//     expect(getDay(365, false)).to.equal("December, 31")

function getDay(day, isLeap) {
    const calendar = {
        "January": 31,
        "February": 28+(isLeap?1:0),
        "March": 31,
        "April": 30,
        "May": 31,
        "June": 30,
        "July": 31,
        "August": 31,
        "September": 30,
        "October": 31,
        "November": 30,
        "December": 31
    };
    for (const month of Object.keys(calendar)) {
        if (day <= calendar[month]) return `${month}, ${day}`;
        day -= calendar[month];
    }
}