//https://www.codewars.com/kata/5828713ed04efde70e000346/solutions/javascript/me/best_practice

function countLanguages(list) {
    let obj = {}
    for ( let i =0; i < list.length; i++){
        if (obj[list[i].language]) obj[list[i].language]++
        else obj[list[i].language] = 1;
    }
    return obj;
}