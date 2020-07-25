//


function isAnagram (test, original) {
    return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
}

var isAnagram = function(test, original) {
    test = test.toLowerCase();
    original = original.toLowerCase();
    let count = 0;
    for (let i = 0; i < test.length; i++) {
        if (original.includes(test[i])) {
            count++;
        }
    }
    return (count === test.length && count === original.length) ? true : false
}