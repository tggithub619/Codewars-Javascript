//https://www.codewars.com/kata/568f9bd9cbe89334c900000c

function uniqueNumbers(arr) {
    return arr.filter((el, i) => arr.indexOf(el) === i)
}

//Test.it("test 1", function(){
//     var numbers = uniqueNumbers([1,1,2,2]);
//     Test.assertSimilar(numbers, [1,2]);
//   });


function uniqueNumbers(numbersArray) {
    return [...new Set(numbersArray)];
}

