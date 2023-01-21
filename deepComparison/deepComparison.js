/*The == operator compares objects by identity. But sometimes you’d prefer to compare
the values of their actual properties. 

Write a function deepEqual that takes two values and returns true only if they are the same 
value or are objects with the same properties, where the values of the properties are equal
when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or
have their properties compared, you can use the typeof operator. If it produces "object"
for both values, you should do a deep comparison. But you have to take one silly exception
into account: because of a historical accident, typeof null also produces "object".
The Object.keys function will be useful when you need to go over the properties of objects to compare them.*/

function deepEqual(val1, val2) {
    if ((val1 == null)||(val2 == null)) {
        return val1 === val2;
    } else if ((typeof val1 == "object")&&(typeof val2 == "object")) {
        let val1Prop = Object.keys(val1);
        let val2Prop = Object.keys(val2);
        if (val1Prop.length != val2Prop.length) return false;
        let status = true;
        for (let i = 0; (i < val1Prop.length)&&(status); i++) {
            status = deepEqual(val1 [val1Prop[i]], val2 [val2Prop[i]]);
        }
        return status;
    } else {
        return val1 === val2;
    }
}

let obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

//it works!!!