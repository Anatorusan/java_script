// Analogous to the some method, arrays also have an every method. This one returns true 
// when the given function returns true for every element in the array. In a way, some is
// a version of the || operator that acts on arrays, and every is like the && operator.
// Implement every as a function that takes an array and a predicate function as parameters.
// Write two versions, one using a loop and one using the some method.

function every(array, testFunc) {
    let result = undefined;
    for (let i = 0; i < array.length; i++) {
      result = testFunc(array[i]);
      if (!result) return false;
    }
    return true;
  }
  
  function every2(array, predicate) {
    return !array.some(element => !predicate(element));
  }

  
  console.log(every([], n => n < 10));
  console.log(every2([], n => n < 10));