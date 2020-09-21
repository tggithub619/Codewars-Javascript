//https://www.codewars.com/kata/55805ab490c73741b7000064/train/javascript

var makeBackronym = function(string){
    return string.toUpperCase().split('').map(elem=>dict[elem]).join(' ');
};
