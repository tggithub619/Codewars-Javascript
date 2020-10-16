//https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript

var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = (humanYears===1)? 15:(humanYears == 2)? 15+9: ((humanYears-2)*4)+15+;
    let dogYears = (humanYears===1)? 15:(humanYears == 2)? 15+9: ((humanYears-2)*5)+15+9;
    return [humanYears, catYears, dogYears];
}
