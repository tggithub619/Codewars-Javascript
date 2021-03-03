//https://www.codewars.com/kata/57fe50d000d05166720000b1

function sabb(s, val, h){
    let count = val + h
    for (let el of s){
        if ('sabbatical'.includes(el)) count++
    }
    return count > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.'
}

//Test.assertEquals(sabb('Can I have a sabbatical?', 5, 5), 'Sabbatical! Boom!');
// Test.assertEquals(sabb('Why are you shouting?', 7, 2), 'Back to your desk, boy.');
// Test.assertEquals(sabb('What do you mean I cant learn to code??', 8, 9), 'Sabbatical! Boom!');
// Test.assertEquals(sabb('Please calm down', 9, 1), 'Back to your desk, boy.');

function sabb(x, val, happ){
    x=x.toLowerCase();
    var count = val+happ;
    for (var i = 0; i<x.length; i++)
        if (x[i]=='a' || x[i]=='b' || x[i]=='c' || x[i]=='l' || x[i]=='t' || x[i]=='s' || x[i]=='i')
            count++;
    return count>22?"Sabbatical! Boom!":"Back to your desk, boy."
}