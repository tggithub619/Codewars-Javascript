//https://www.codewars.com/kata/5857e8bb9948644aa1000246/train/javascript

function determineTime(durations){
    let hours=0;
    let min=0;
    let sec=0;
    durations.map(v=>v.split(':').map((v,i)=>i===0?hours+=v*1:i===1?min+=v*1:sec+=v*1))
    min+=sec/60;
    hours+=min/60
    return hours<=24
}

function determineTime(durations){
    let sec = 0;
    let str = [];
    for (let i = 0; i < durations.length; i++) {
        str = durations[i].split(":");
        sec += +str[0] * 3600 + +str [1] * 60 + +str[2];
    }
    return sec/3600 <=24 ? true : false;
}