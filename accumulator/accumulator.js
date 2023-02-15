function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += Number(prompt("please enter a number: ", 0));
    }
}

let acc = new Accumulator(5);
acc.read();
acc.read();
acc.read();
console.log(acc.value);