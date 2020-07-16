//https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript


function smash (words) {
    return words.join(' ')
};

function smash (words) {
    let str = '';
    for ( let i =0; i <words.length; i++){
        if(i != words.length-1){
            words[i]= words[i]+ ' '
        }
        str+= words[i]
    }
    return str
};