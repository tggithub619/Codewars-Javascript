//https://www.codewars.com/kata/5733f948d780e27df6000e33/train/javascript

function cutCube(volume,n){
   if(Number.isInteger(Math.cbrt(volume/n)) && Number.isInteger(Math.cbrt(n))
    ) return true;
    else return false;
}

function cutCube(volume,n){
    if(Number.isInteger(Math.cbrt(volume/n)) && Number.isInteger(Math.cbrt(n))) return true;
    else return false;
}

function cutCube(volume,n){
    if (Math.cbrt(n) % 1 !== 0) return false;
    else return (Math.cbrt(volume / n) % 1 == 0) ? true : false;
}
