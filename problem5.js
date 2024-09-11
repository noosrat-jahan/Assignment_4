function  waitingTime(waitingTimes , serialNumber) {

    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return "Invalid Input"
    }

    let sum_of_times = 0
    for(let times of waitingTimes){
        sum_of_times += times
    }

    let average_of_times = Math.round(sum_of_times / waitingTimes.length)
    let timeRequiredForIsrat = (serialNumber - 1 - waitingTimes.length) * average_of_times
    return timeRequiredForIsrat
}

console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7 , 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
