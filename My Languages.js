//https://www.codewars.com/kata/5b16490986b6d336c900007d/train/javascript

function myLanguages(res) {
    return Object.keys(res).filter(el => res[el] >= 60).sort((a,b)=> res[b]-res[a])
}
