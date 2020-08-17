https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/java/5eb9d4781ffc6f0014053950

function removeChar(str){
    return str.substring(1, str.length-1);

};

function removeChar(str){
    return str.split('').filter((el, i) => i >=1 && i < str.length-1).join('')
};

