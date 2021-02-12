//https://www.codewars.com/kata/5a9a70cf5084d74ff90000f7

function isPrime(num) {
    let sqr=Math.floor(Math.sqrt(num));
    let prime = num != 1;
    for(var i=2; i<sqr+1; i++) {
        if(num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}


function notPrimes(a,b){
    let res = []
    while (a < b) {
        a = a.toString()
        let loop = true;
        for (let i = 0; i < a.length; i++) {
            if (a[i] != 2 && a[i] != 3 && a[i] != 5 && a[i] != 7) {
                loop = false;
                break;
            }
        }
        if (loop == true) {
            if (!isPrime(a)) res.push(+a);
        }
        a = Number(a) + 1;
    }
    return res;
}

//Test.assertDeepEquals(notPrimes(2, 222), [22, 25, 27, 32, 33, 35, 52, 55, 57, 72, 75, 77]);
// Test.assertDeepEquals(notPrimes(2700, 3000), [2722, 2723, 2725, 2727, 2732, 2733, 2735, 2737, 2752, 2755, 2757, 2772, 2773, 2775]);
// Test.assertDeepEquals(notPrimes(500, 999), [522, 525, 527, 532, 533, 535, 537, 552, 553, 555, 572, 573, 575, 722, 723, 725, 732, 735, 737, 752, 753, 755, 772, 775, 777]);
// Test.assertDeepEquals(notPrimes(999, 2500), [2222, 2223, 2225, 2227, 2232, 2233, 2235, 2252, 2253, 2255, 2257, 2272, 2275, 2277, 2322, 2323, 2325, 2327, 2332, 2335, 2337, 2352, 2353, 2355, 2372, 2373, 2375]);


function notPrimes(a,b){
    let arr = [];
    for (let i = a; i < b; i++){
        if (!/[014689]/.test(i)) {
            for (let j = 2; j <= Math.sqrt(i); j++){
                if (i % j === 0) { arr.push(i); break;}
            }
        }
    }
    return arr;
}