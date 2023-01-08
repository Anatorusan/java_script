/*You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will
be a string containing only one character (for example, "b"). The first character has position 0, which
causes the last one to be found at position string.length - 1. In other words, a two-character string has
length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates 
how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument
that indicates the character that is to be counted (rather than counting only uppercase “B” characters).
Rewrite countBs to make use of this new function.

Haverbeke, Marijn. Eloquent JavaScript, 3rd Edition (pp. 56-57). No Starch Press. Kindle Edition.*/

function countBs(str, searchChar) {
    if (typeof str !== "string") {
        return console.log("This is not a string!");
    }
    let charAmount = 0;
    for (let counter = 0; counter < str.length; counter++) {
        if (str[counter] === searchChar) {
            charAmount += 1;
        }
    }
    if (charAmount == 0) {
        return console.log("No such character!")
    } else {
        return console.log(charAmount);
    }
}
countBs(100, "!");