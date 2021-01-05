//https://www.codewars.com/kata/5a145ab08ba9148dd6000094

function doubles(s){
    let result = []
    for (let item of s) {
        if (result.length > 0 && result[result.length - 1] == item) {
            result.pop()
        } else {
            result.push(item)
        }
    }
    return result.join('')
}

//Test.assertEquals(doubles('abbbzz'),'ab')
// Test.assertEquals(doubles('zzzzykkkd'),'ykd')
// Test.assertEquals(doubles('abbcccdddda'),'aca')
// Test.assertEquals(doubles('vvvvvoiiiiin'),'voin')
// Test.assertEquals(doubles('rrrmooomqqqqj'),'rmomj')
// Test.assertEquals(doubles('xxbnnnnnyaaaaam'),'bnyam')

function doubles(s){
    s1= s.split('')
    res = []
    for(let i = 0; i<s1.length; i++){
        if (s1[i] == s1[i+1]){
            i+=1
            continue;
        }
        else {
            res.push(s1[i])
        }
    }
    console.log(s)
    return res.join('')
}

