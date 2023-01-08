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