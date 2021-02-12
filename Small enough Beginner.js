//https://www.codewars.com/kata/57cc981a58da9e302a000214

function smallEnough(a, limit){
    return a.every(el => el <= limit)
}

//Test.assertEquals(smallEnough([66, 101], 200), true);
// Test.assertEquals(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
// Test.assertEquals(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
// Test.assertEquals(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);

function smallEnough(a, limit){
    return Math.max(...a) <= limit
}