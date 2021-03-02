//https://www.codewars.com/kata/52774a314c2333f0a7000688

function validParentheses(parens){
    let count = 0;
    for (let i = 0; i < parens.length; i++) {
        switch (parens[i]) {
            case "(": count++; break;
            case ")": count--; break;
            default: break;
        }
        if (count < 0) return false;
    }
    return count === 0;}



//    Test.assertEquals(validParentheses( "()" ), true);
// Test.assertEquals(validParentheses( "())" ), false);

function validParentheses(parens){
    let count = 0;
    for (let i = 0; i < parens.length; i++) {
        if (parens[i] == '(') count++;
        if (parens[i] == ')') count--;
        if (count < 0) return false;
    }
    return count == 0;
}
