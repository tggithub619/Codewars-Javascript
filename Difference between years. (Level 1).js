//https://www.codewars.com/kata/588f5a38ec641b411200005b

var howManyYears = function(date1, date2){
    date1 = date1.split('/')
    date2 = date2.split('/')
    return Math.abs(date1[0] - date2[0]);
}

// Test.assertEquals(howManyYears('1997/10/10', '2015/10/10'), 18);
//   Test.assertEquals(howManyYears('1990/10/10', '2015/10/10'), 25);
//   Test.assertEquals(howManyYears('2015/10/10', '1990/10/10'), 25);
//   Test.assertEquals(howManyYears('1992/10/24', '2015/10/24'), 23);
//   Test.assertEquals(howManyYears('2018/10/10', '2000/10/10'), 18);