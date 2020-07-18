//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

function DNAStrand(dna){
    let result = "";
    for ( let i = 0; i<dna.length; i++){
        if (dna[i] === "A") {
            result += "T";}
        if (dna[i] === "T") {
            result += "A";}
        if (dna[i] === "C") {
            result += "G";}
        if (dna[i] === "G") {
            result += "C";}
    }
    return result;

}


function DNAStrand(dna){
    return dna.replace(/A/g, 't').replace(/T/g, 'a').replace(/G/g, 'c').replace(/C/g, 'g').toUpperCase();
}

function DNAStrand(dna){
    let obj = {
        A: 'T',
        T: 'A',
        G: 'C',
        C: 'G',
    }
    let res = '';
    for(let i of dna){
        res += obj[i];
    }
    return res;
}

function swap(char){
    let str = 'ATCG';
    let str2 = 'TAGC';
    let i = str.indexOf(char);
    return str2[i];
}
function DNAStrand(dna){
    return dna.replace(/[ATCG]/g, swap)
}

function DNAStrand(dna){
    return dna.replace(/[ATCG]/g, char=> "TACG" ["ATGC".indexOf(char)])
}