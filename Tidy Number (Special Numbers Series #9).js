//https://www.codewars.com/kata/5a87449ab1710171300000fd

function tidyNumber(n){
    return n == +(n+'').split('').sort((a,b) => a-b).join('')
}

// Test.assertEquals(tidyNumber(12),true);
//   Test.assertEquals(tidyNumber(102),false);
//   Test.assertEquals(tidyNumber(9672),false);
//   Test.assertEquals(tidyNumber(2789),true);
//   Test.assertEquals(tidyNumber(2335),true);



function tidyNumber(n){
    return [...n+=""].sort().join``==n
}