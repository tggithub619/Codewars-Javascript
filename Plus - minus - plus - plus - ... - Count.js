//https://www.codewars.com/kata/5bbb8887484fcd36fb0020ca/train/javascript

const catchSignChange = arr => {
    let countM = 0
    for (let i =0; i<arr.length; i++){
        if(arr[i]<0 && arr[i+1]>=0 || arr[i]>=0 && arr[i+1]<0){
            countM++;
        }
    }
    return countM
}