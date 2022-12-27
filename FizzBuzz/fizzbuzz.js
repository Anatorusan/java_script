let num = 1;
for (let counter = 0; counter < 100; counter++) {
    if (!(num % 3) && !(num % 5)) {
        console.log('FizzBuzz');
    } else if (!(num % 3)) {
        console.log("Fizz");
    } else if (!(num % 5)) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
    num += 1;
}