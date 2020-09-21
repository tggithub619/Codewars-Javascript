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
