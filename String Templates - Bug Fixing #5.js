//https://www.codewars.com/kata/55c90cad4b0fe31a7200001f/train/javascript

function buildString(...template){
    return `I like ${template.join(', ')}!`;
}

function buildString(...template){
    let str = '';
    for (let i in template){
        if (i < template.length-1 ){
            str+= template[i]+', ';
        } else str+=template[i]+'!'
    }
    return `I like ${str}`;
}
