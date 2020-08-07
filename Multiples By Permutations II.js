//

function findLowestInt(k) {
    let k2 = k+1;
    let n = 1;
    while ((""+(k*n)).split('').sort().join('') !== (""+(k2*n)).split('').sort().join('')){
        n+=1;
     }
    return n;
}

function findLowestInt(k) {
    let n = 1
    while (true){
        let n1 = k * n;
        let n2 = (k + 1) * n;
        let s1 = (n1+"").split("").sort().join("");
        let s2 = (n2+"").split("").sort().join("");
        if (s1 === s2) return n;
        n += 1
    }
}