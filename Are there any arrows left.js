//https://www.codewars.com/kata/559f860f8c0d6c7784000119/train/javascript

function anyArrows(arrows){
    return arrows.some( el => !el.damaged );
}

function anyArrows(arrows){
    if(arrows.length == 0){ return false;}
    for(let i = 0;i<arrows.length ;i++){
        if(arrows[i].damaged!==true) return true;
    }
    return false;
}