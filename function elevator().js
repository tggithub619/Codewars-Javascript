function elevator(left, right, call){
    if (Math.abs(left -call) < Math.abs(right - call)) return "left";
    else return "right";
}

const elevator = (left, right, call) => Math.abs(call-left) < Math.abs(call-right) ? 'left' : 'right'