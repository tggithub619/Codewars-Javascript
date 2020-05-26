//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

function abbrevName(name){
    let firstname = name[0].toUpperCase();
    let space = name.indexOf(' ');
    let lastName = name[name.indexOf(' ')+1].toUpperCase();
    return `${firstname}.${lastName}`;
}

function abbrevName(name){

    let arr = name.split(' ');
    return `${arr[0][0]}.${arr[1][0]}`.toUpperCase()

}
