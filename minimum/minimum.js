// Chapter 2 introduced the standard function Math.min, which returns its smallest argument (see “Return
// Values” on page 27). We can build something like that now. Write a function min that takes two
// arguments and returns their minimum.

// Haverbeke, Marijn. Eloquent JavaScript, 3rd Edition (p. 56). No Starch Press. Kindle Edition.

function min(num1, num2) {
    if (num1 > num2) {
        return num2;
    } else if (num2 > num1) {
        return num1;
    } else {
        return "numbers are equal";
    }
}

console.log(min(10, 10));