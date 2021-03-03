//https://www.codewars.com/kata/525d9b1a037b7a9da7000905

function searchNames( logins ){
    return logins.filter(el=> el[0].endsWith('_'))
    //logins.filter((arr) => arr[0][arr[0].length - 1] === '_');
    //return login[0].slice(-1) === '_'

}

//If you have the input-array:
//
// [ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]
// it should output
//
// [ [ "bar_", "bar@bar.com" ] ]
