//https://www.codewars.com/kata/568dc014440f03b13900001d/train/javascript

function getDrinkByProfession(param){
    let ask = param.toLowerCase();
    if (ask === "Jabroni".toLowerCase()) return "Patron Tequila";
    if (ask === "School Counselor".toLowerCase()) return "Anything with Alcohol";
    if (ask ===  "Programmer".toLowerCase()) return  "Hipster Craft Beer";
    if (ask === "Bike Gang Member".toLowerCase()) return "Moonshine";
    if (ask ===  "Politician".toLowerCase()) return "Your tax dollars";
    if (ask === "Rapper".toLowerCase()) return "Cristal";
    else return "Beer";
}