//https://www.codewars.com/kata/571b6a4a7beb0a8ade0007a8/train/javascript

function bloodAlcoholContent(drinks, weight, sex, time){
    if (sex === 'female') {
        sex = 0.66;
    }   else if (sex === 'male'){
        sex = 0.73;
    }
    let bac = ((drinks.ounces * drinks.abv)* 5.14 / weight * sex) - 0.015 * time;
    return +bac.toFixed(4);
}

function bloodAlcoholContent(drinks, weight, sex, time){
    return +(((drinks.ounces * drinks.abv * 5.14 / weight * (sex == 'male' ? 0.73 : 0.66)) - 0.015 * time).toFixed(4));
}
