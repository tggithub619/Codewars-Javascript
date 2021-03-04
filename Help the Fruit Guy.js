//https://www.codewars.com/kata/557af4c6169ac832300000ba/train/javascript

function removeRotten(bagOfFruits){
    if (bagOfFruits === null || bagOfFruits === undefined) {
        return [];  }
    return bagOfFruits.map(el => el.replace("rotten", "")).map(el => el.toLowerCase())
}

//Test.assertSimilar(removeRotten(["apple","banana","kiwi","melone","orange"]), ["apple","banana","kiwi","melone","orange"])
// Test.assertSimilar(removeRotten([]), [])

function removeRotten(arr){
    return arr ? arr.map(x=>x.replace('rotten', '').toLowerCase()) : [] ;
}