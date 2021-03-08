//https://www.codewars.com/kata/5239f06d20eeab9deb00049b


function fibonacci(n) {
    let arr = [0,1]
    for ( let i = 2; i< n; i++){
        arr.push(arr[i-1] + arr[i-2])
    }
    return n>0 ? arr:[]
}

//Test.expect(fibonacci(5).length===5, "Expected 5 elements");
// Test.expect(fibonacci(5)[4]===3, "Last element for input 5 should be 3");
// Test.expect(fibonacci(13)[12]===144, "Last element for input 13 should be 144");
// Test.expect(fibonacci(-5).length===0, "Expected 0 elements for negative input");
// Test.expect(fibonacci(0).length===0, "Expected 0 elements for 0 input");

