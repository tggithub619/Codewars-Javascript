//https://www.codewars.com/kata/57470efebf81fea166001627

function letterCheck(arr) {
    arr = arr.map(word => word.toLowerCase())
    let list =  arr[0].split('').filter((el, i)=> arr[0].indexOf(el) === i)
    let check = arr[1].split('').filter((el, i)=> arr[1].indexOf(el) === i)
    let count = 0
    for (let i =0; i<check.length; i++){
        for (let j =0; j<list.length; j++){
            if (check[i] == list[j]) count++
        }
    }
    return count == check.length
}


//est.assertEquals(letterCheck(["trances", "nectar"]), true)
// Test.assertEquals(letterCheck(["THE EYES", "they see"]), true)
// Test.assertEquals(letterCheck(["assert", "staring"]), false)
// Test.assertEquals(letterCheck(["arches", "later"]), false)
// Test.assertEquals(letterCheck(["dale", "caller"]), false)
// Test.assertEquals(letterCheck(["parses", "parsecs"]), false)
// Test.assertEquals(letterCheck(["replays", "adam"]), false)

function letterCheck(arr) {
    return [...arr[1].toLowerCase()].every(x => arr[0].toLowerCase().includes(x));
}