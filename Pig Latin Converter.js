//https://www.codewars.com/kata/57fe90ae08d102a2ba0011e6

function pigLatin(phrase){
    return phrase.toLowerCase().split(' ')
        .map(el => el.split(' ').map(el => el.slice(1) + el[0] + 'ay')
            .join('')).join(' ')
}

// Test.assertEquals(pigLatin('sup'), 'upsay');
//     Test.assertEquals(pigLatin('The cat ran away with the spoon'), 'hetay atcay anray wayaay ithway hetay poonsay');
//     Test.assertEquals(pigLatin('Hello how are you today'), 'ellohay owhay reaay ouyay odaytay');


function pigLatin(phrase){

    return phrase.split(' ').map(w => w.slice(1) + w[0] + 'ay').join(' ').toLowerCase();

}

function pigLatin(s){
    return s.toLowerCase().replace(/\w+/g,m=>m.slice(1)+m[0]+'ay')
}