//https://www.codewars.com/kata/596776fbb4f24d0d82000141/solutions/javascript/me/best_practice

function f(x, obj) {
    for(let key in obj){
        if(obj[key] === x){
            if(key === 'a') return obj['b']
            if(key === 'b') return obj['c']
            if(key === 'c') return obj['a']
        }
    }
}

function f(x, cc) {
    switch (x) {
        case cc.a: return cc.b;
        case cc.b: return cc.c;
        case cc.c: return cc.a;
    }
}