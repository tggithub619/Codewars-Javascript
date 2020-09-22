//https://www.codewars.com/kata/582746fa14b3892727000c4f/train/javascript

function countDevelopers(list) {
    return list.filter(
        ({ continent, language }) =>
            continent === 'Europe' && language === 'JavaScript'
    ).length
}

function countDevelopers(list) {
    return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
}

function countDevelopers(list) {
    let count = 0
    for (let i in list){
        if(list[i].continent == 'Europe' && list[i].language == 'JavaScript')
            count++
    }
    return count;
}
