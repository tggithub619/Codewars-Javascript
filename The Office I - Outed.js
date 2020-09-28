//https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1/train/javascript

function outed(meet, boss) {
    let teamSize = Object.keys(meet).length
    let avgHappiness = Object.values(meet).reduce((a, b) => a + b) + meet[boss]
    return (avgHappiness / teamSize) > 5 ? 'Nice Work Champ!' : 'Get Out Now!'
}

function outed(meet, boss){
    var sum=0;
    var count=0;
    for (var key in meet)
        if (key!=boss)
        { sum+=meet[key];
            count++;
        } else {
            sum+=meet[key]*2;
            count++;
        }
    return sum/count<=5?'Get Out Now!':'Nice Work Champ!';
}
