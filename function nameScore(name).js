//https://www.codewars.com/kata/576a29ab726f4bba4b000bb1/solutions/javascript/me/best_practice

function nameScore(name){
    let nameNew= name.toUpperCase();
    let sum = 0;
    let obj = {};
    for(let s of nameNew){
        for(let key in alpha){
            if(key.includes(s)) sum += alpha[key]
        }
    }
    obj[name] = sum
    return obj;
}

function nameScore(name){
    var count=0;
    for (var i=0; i<name.length; ++i)
        for (var key in alpha)
            if (key.indexOf(name[i].toUpperCase())!=-1)
                count+=alpha[key];
    var a={};
    a[name]=count;
    return a;
}