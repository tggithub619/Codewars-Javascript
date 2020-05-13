https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript/5eb891279b1382003164b8f9

function findNextSquare(sq){
    var root;
    var nextroot=0;
    if(Math.sqrt(sq)%1 ===0){
        root=Math.sqrt(sq);
        nextroot=root+1;
    }else{
        return -1;
    }
    return nextroot*nextroot;
}