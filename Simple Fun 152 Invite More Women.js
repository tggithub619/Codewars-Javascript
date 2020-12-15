//https://www.codewars.com/kata/58acfe4ae0201e1708000075/train/javascript

function inviteMoreWomen(L) {
    return L.reduce((x,y)=> x+y, 0)>=1 ? true: false
}

function inviteMoreWomen(L) {
    return L.reduce((a,b) => a+b) > 0;
}