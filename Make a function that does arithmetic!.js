//https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript

function arithmetic(a, b, op){
    if (op === "add") return a+b;
    if (op === "subtract") return a-b;
    if (op === "multiply") return a*b;
    if (op === "divide") return a/b;

}

function arithmetic(a, b, operator){
    optable = { "add":"+", "subtract": "-", "multiply": "*" , "divide":"/"};
    return eval(a + optable[operator] + b);
}

function arithmetic(a, b, operator){
    return ops[operator](a, b);
}

const ops = {
    "add"      : (a, b) => a + b,
    "subtract" : (a, b) => a - b,
    "multiply" : (a, b) => a * b,
    "divide"   : (a, b) => a / b
}

function arithmetic(a, b, operator){
    const obj = {
        add: a + b,
        subtract: a - b,
        multiply: a * b,
        divide: a / b
    }
    return obj[operator];
}
