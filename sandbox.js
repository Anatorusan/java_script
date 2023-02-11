function Bottle () {};
Bottle.prototype.capacity = {
    s: "0.5L",
    m: "1.0L",
    l: "1.5L"
};

let CocaCola = new Bottle;
let PepsiCola = new CocaCola.constructor();
console.log(PepsiCola.capacity.l);