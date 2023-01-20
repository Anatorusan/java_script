/*Write a range function that takes two arguments, start and end, and returns an array 
containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 
Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that 
indicates the “step” value used when building the array. If no step is given, the elements 
go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) 
should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) 
produces [5, 4, 3, 2].  */


// pure range function
// let range = function(startNum, endNum) {
//     let numRange = [];
//     let curNum = startNum;
//     for (let i = 0; curNum <= endNum; i++) {
//         numRange [i] = curNum;
//         curNum += 1;
//     }
//     return numRange;
// }

// console.log(range(1, 10));

// range function with step
function range(startNum, endNum, step = 1) {
    let numRange = [];
    let curNum = startNum;
    if (step == 0) { 
        numRange[0] = startNum;
        return numRange; 
    }
    if (step > 0) {
        for (let i = 0; curNum <= endNum; i++) {
            numRange [i] = curNum;
            curNum += step;
        }
    } else {
        for (let i = 0; curNum >= endNum; i++) {
            numRange [i] = curNum;
            curNum += step;
        }
    }
    return numRange;
};

// sum function
function sum(array) {
    let sum = 0;
    for (let entry of array) {
        sum += entry;
    }
    return sum;
}

console.log(sum(range(10, -20, -3)));