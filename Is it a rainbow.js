//https://www.codewars.com/kata/59e7202ffc3c4952940000a9

function sortRainbow(colour){
   return ['red','orange','yellow','green','blue','indigo','violet'].every((el,i)=> el==colour[i])
}

//Test.assertEquals(sortRainbow(['red','green']),false);
// Test.assertEquals(sortRainbow(['red','orange','yellow', 'green','blue','indigo',1]),false);
// Test.assertEquals(sortRainbow(['red','green','yellow','orange','blue','indigo','violet']),false);
// Test.assertEquals(sortRainbow(['red','orange','yellow','green','blue','indigo','violet']),true);