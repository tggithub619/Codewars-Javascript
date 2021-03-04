//https://www.codewars.com/kata/5630d1747935943168000013

var scoreToTally = function(score){
    console.log(score)
    let s = ''
    for ( let i =score; i >0; i--){
        if (score >=5){
            score-=5
            s+= 'e <br>'
            continue;
        }
        if (score >=4){
            score-=4
            s+= 'd'
        }
        if (score >=3){
            score-=3
            s+= 'c'
        }
        if (score >=2){
            score-=2
            s+= 'b'
        }
        if (score >=1){
            score-=1
            s+= 'a'
        }
    }
    return s
}

//Test.assertEquals(scoreToTally(10),'e <br>e <br>'
//Test.assertEquals(scoreToTally(9),'e <br>d'

const scoreToTally = score => {
    let str = '';
    for(let i = score; 0 < i; i -= 5) {
        if(i >= 5) str += 'e <br>';
        if(i === 4) str += 'd';
        if(i === 3) str += 'c';
        if(i === 2) str += 'b';
        if(i === 1) str += 'a';
    }
    return str;
};