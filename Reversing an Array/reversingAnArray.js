/*Arrays have a reverse method that changes the array by inverting the order in which its 
elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace.
The first, reverseArray, takes an array as argument and produces a new array that has the 
same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse 
method does: it modifies the array given as argument by reversing its elements. 
Neither may use the standard reverse method.*/

// function reverseArray(initArray) {
//     let revArray = [];
//     let initArrayTrack = initArray.length - 1;
//     for (let i = 0; i <= initArray.length - 1; i++) {
//         revArray[i] = initArray[initArrayTrack];
//         initArrayTrack -= 1;
//     }
//     return revArray;
// }

function reverseArray(initArray) {
    let revArray = [];
    let initArrayTrack = initArray.length - 1;
    while (initArrayTrack >= 0) {
        revArray.push(initArray[initArrayTrack]);
        initArrayTrack -= 1;
    }
    return revArray;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6]));


function reverseArrayInPlace(initArray) {
    let revIndex = initArray.length * 2 - 1;
    for (let i = initArray.length; i > 0; i--) {
        initArray[revIndex] = initArray[0];
        initArray.shift();
        revIndex -= 2;
    }
    return initArray;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6]));

// solution from the book
// function reverseArrayInPlace(array) {
//     for (let i = 0; i < Math.floor(array.length / 2); i++) {
//       let old = array[i];
//       array[i] = array[array.length - 1 - i];
//       array[array.length - 1 - i] = old;
//     }
//     return array;
//   }