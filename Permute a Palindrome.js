//https://www.codewars.com/kata/58ae6ae22c3aaafc58000079/train/javascript

function permuteAPalindrome(input){
    let arr = input.split('').sort();
    console.log(arr);
    const obj = {};
    for (let i = 0; i < arr.length; i++){
        if (obj[arr[i]]){
            obj[arr[i]] = obj[arr[i]]+1;
        } else {
            obj[arr[i]] = 1;
        }
    }
    console.log(obj);
    let count = 0;
    for(let key in obj){
        if (obj[key] %2 !==0) {
            count++;
            if (count > 1) return false;
        }
    }
    return true;
}
