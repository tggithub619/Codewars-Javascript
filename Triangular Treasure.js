//https://www.codewars.com/kata/525e5a1cb735154b320002c8

// Return the nth triangular number
function triangular( n ) {
    if ( n <= 0 ){
        return 0
    }
    let res= 0;

    while (n > 0) {
        res += n;
        n -= 1;
    }

    return res
}

//1st (1)   2nd (3)    3rd (6)
// *          **        ***
//            *         **
//                      *

// triangular(0)==0,
//   triangular(2)==3,
//   triangular(3)==6,
//   triangular(-10)==0