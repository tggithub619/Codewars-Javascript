//https://www.codewars.com/kata/5bf774a81505a7413400006a/train/javascript

function fix(p){
    return p.split('. ').map( w =>  w.substring(0,1).toUpperCase()+ w.substring(1)).join('. ')
}
