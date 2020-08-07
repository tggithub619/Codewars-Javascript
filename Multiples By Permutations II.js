//

function findLowestInt(k) {
    let k2 = k+1;
    let n = 1;
    while ((""+(k*n)).split('').sort().join('') !== (""+(k2*n)).split('').sort().join('')){
        n+=1;
     }
    return n;
}