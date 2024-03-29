/*Write a function arrayToList that builds up a list structure like the one 
shown when given [1, 2, 3] as argument. Also write a listToArray function that
produces an array from a list. Then add a helper function prepend, which takes
an element and a list and creates a new list that adds the element to the front
of the input list, and nth, which takes a list and a number and returns the
element at the given position in the list (with zero referring to the first element)
or undefined when there is no such element. If you haven’t already,
also write a recursive version of nth.*/


function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list}
    }
    return list;
}

let newList = arrayToList([1, 2, 3, 5, 6, 10]);

function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend(element, list) {
    let newList = {value: element, rest: list}
    return newList;
}

function nth(list, num) {
    if (!list) return undefined;
    else if (num == 0) return list.value;
    else return nth(list.rest, num - 1);
}

console.log(nth(newList, 12));