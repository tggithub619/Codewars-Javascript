//https://www.codewars.com/kata/5f70c883e10f9e0001c89673

const flip=(d, a)=>{
    return (d == "L")? a.sort((x,y)=> x-y).reverse() : a.sort((x,y)=> x-y)
}


// it("fixed tests", function() {
//     assert.deepEqual(flip('R', [3, 2, 1, 2]), [1, 2, 2, 3]);
//     assert.deepEqual(flip('L', [1, 4, 5, 3, 5]), [5, 5, 4, 3, 1]);
//   });

