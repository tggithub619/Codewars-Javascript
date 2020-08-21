//https://www.codewars.com/kata/570bcd9715944a2c8e000009/train/javascript

function sc(floor){
    if (floor <= 1) return "";
    return 'Aa~ '.repeat(floor-1) + 'Pa!' + (floor<=6 ? ' Aa!': '');
}

function sc(floor) {
    if (floor <= 1) return "";
    let s= "";
    for (let i = 0; i < floor-1; i++) {
        s+="Aa~ ";
    }
    s+="Pa!";
    if (floor <= 6) s+=" Aa!";
    return s;
}