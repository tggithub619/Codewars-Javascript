//https://www.codewars.com/kata/58279e13c983ca4a2a00002a/train/javascript

function greetDevelopers(list) {
    let obj = [];
    for (let i of list) {
        i.greeting = `Hi ${i.firstName}, what do you like the most about ${i.language}?`;
        obj.push(i)
    }
    return obj;
}

function greetDevelopers(list) {
    return list.map(
        x => ({...x, greeting: `Hi ${x.firstName}, what do you like the most about ${x.language}?`})
    );
}
