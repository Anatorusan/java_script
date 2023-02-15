function Calculator() {
    this.read = function() {
        let a = Number(prompt("Enter number a", 0));
        let b = Number(prompt("Enter number b", 0));
        this.a = a;
        this.b = b; 
    }
    this.sum = function() {
        this.sum = this.a + this.b;
        return this.sum;
    }
    this.mul = function() {
        this.mul = this.a * this.b;
        return this.mul;
    }
}

let calc = new Calculator;
calc.read();
console.log(calc.sum());
console.log(calc.mul());