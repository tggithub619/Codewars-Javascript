//https://www.codewars.com/kata/58e93b4706db4d24ee000096/solutions/javascript/me/best_practice

function daysRepresented(arr){
  let obj = {}
  for(let i = 0; i < arr.length; i++){
    for(let j = arr[i][0]; j <= arr[i][1]; j++){
    if(!obj[j]) obj[j] = 1;
    }
  }
  return Object.keys(obj).length;
}

function daysRepresented(trips){
  let arr=[];
  for (let i=0; i<trips.length; ++i) {
    for (let j = trips[i][0]; j <= trips[i][1]; j++)
      if (arr.indexOf(j) == -1)
        arr.push(j);
  }
  return arr.length;
}