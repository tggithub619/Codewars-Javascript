//https://www.codewars.com/kata/57ed4cef7b45ef8774000014/train/javascript

function boredom(staff){
    let department = {
        'accounts': 1,
        'finance': 2,
        'canteen': 10,
        'regulation': 3,
        'trading': 6,
        'change': 6,
        'IS': 8,
        'retail': 5,
        'cleaning': 4,
        'pissing about': 25,
    }
    let res = Object.values(staff).reduce((a, b) => a + department[b], 0)
    return (res <=80)?  'kill me now':(res < 100 && res > 80)?  'i can handle this': 'party time!!'
}
