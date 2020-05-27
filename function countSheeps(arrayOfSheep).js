//https://www.codewars.com/kata/54edbc7200b811e956000556/solutions/javascript


function countSheeps(arrayOfSheep) {
    let num=0;
    for(var i=0; i<arrayOfSheep.length; i++)    {
        if(arrayOfSheep[i]==true)
            num++;
    }
    return num;
}

function countSheeps(arr) {
    return arr.filter(Boolean).length;
}