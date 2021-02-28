//https://www.codewars.com/kata/5ac6932b2f317b96980000ca

function minValue(values){
    return +values.filter((x, i) => i === values.lastIndexOf(x)).sort((a,b)=> a-b).join('')
}

Test.assertEquals(minValue([1, 3, 1]), 13);
Test.assertEquals(minValue([4, 7, 5, 7]), 457);
Test.assertEquals(minValue([4, 8, 1, 4]), 148);
Test.assertEquals(minValue([5, 7, 9, 5, 7]), 579);