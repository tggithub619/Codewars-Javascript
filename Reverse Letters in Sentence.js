//https://www.codewars.com/kata/57ebdf944cde58f973000405

function reverser(sent) {
    return  sent.split(' ').map(el => el.split('').reverse().join('')).join(' ')
}

//Test.assertEquals(reverser("Hi mom"), 'iH mom');
// Test.assertEquals(reverser("friendzone"), 'enozdneirf');
// Test.assertEquals(reverser(" "), ' ');
