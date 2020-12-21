//https://www.codewars.com/kata/58712dfa5c538b6fc7000569

function countRedBeads(n) {
    if (n < 2)return 0;
    return (n - 1) * 2;
}

// Test.assertEquals(countRedBeads(0), 0);
// Test.assertEquals(countRedBeads(1), 0);
// Test.assertEquals(countRedBeads(3), 4);
// Test.assertEquals(countRedBeads(5), 8);

