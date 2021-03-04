//https://www.codewars.com/kata/5b39e91ee7a2c103300018b3

const removeConsecutiveDuplicates = s => {
    return s.split(' ').filter((el,i,arr) => el!=arr[i+1]).join(' ')
}


//    Test.assertEquals(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta alpha beta gamma delta');

const removeConsecutiveDuplicates = s =>
{
    s = s.split(' ');
    let arr = [];
    for(let i = 0;i<s.length; i++) {
        if(s[i+1]!==s[i])
            arr.push(s[i]);
    }
    return arr.join(' ') ;
}