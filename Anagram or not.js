//https://www.codewars.com/kata/546274b0eaa31f79c9000d5d


function isAnagram(test, original) {
    return (
        test.replace(" ", '').replace(/[^A-Za-z0-9]/g, '')
            .toLowerCase()
            .split("")
            .sort()
            .join("") ===
        original.replace(" ", '').replace(/[^A-Za-z0-9]/g, '')
            .toLowerCase()
            .split("")
            .sort()
            .join("")
    );
}

//Test.assertEquals(isAnagram("William Shakespeare","I am a weakish speller"), true)
// Test.assertEquals(isAnagram("Silent","Listen"), true)
// Test.assertEquals(isAnagram("Car","Cat"), false, "Car is not an anagram of Cat")
// Test.assertEquals(isAnagram("12345","54321"), true)