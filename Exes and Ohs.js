//https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

function XO(str) {
    let countX = 0;
    let countO = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x'|| str[i] === 'X') countX++;
        if (str[i] === 'o'|| str[i] === 'O') countO++;
    }
    return (countX === countO)? true: (countX === 0 && countO == 0)? true: false;
}