//https://www.codewars.com/kata/5977387e131c07082b000098

function getRes(score) {
    return ((score>=70) ? "Congratulations, you have passed!" : "Sorry, you have failed. Better luck next time!") + " Thank you for taking part."
}

Test.assertEquals(getRes(70), 'Congratulations, you have passed! Thank you for taking part.', "Test failed. Score 70 expected Congratulations message")
Test.assertEquals(getRes(56), 'Sorry, you have failed. Better luck next time! Thank you for taking part.', "Test failed. Score 56 expected Sorry message")