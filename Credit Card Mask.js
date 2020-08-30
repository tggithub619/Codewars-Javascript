//https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

function maskify(cc) {
    return cc.slice(0, -4).replace(/\w/g, "#") + cc.slice(-4);
}

function maskify(cc) {
    cc = cc.split('');
    for(let i = 0; i<cc.length-4; i++){
        cc[i] = "#";
    }
    cc = cc.join("");
    return cc;
}

function maskify(cc) {
    cc = cc.split('');
    let part1 =[];
    for(let i = 0; i<cc.length-4; i++){
        cc[i] = "#";
        part1.push(cc[i]);
    }
    return part1.concat(cc.slice(-4)).join('');
}

function maskify(cc) {
    return '#'.repeat(cc.slice(0, -4).length) + cc.slice(-4);
}
