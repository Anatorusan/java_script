/*Earlier in the chapter I mentioned that an object’s hasOwnProperty
can be used as a more robust alternative to the in operator when you
want to ignore the prototype’s properties. But what if your map needs
to include the word "hasOwnProperty"? You won’t be able to call that
method anymore because the object’s own property hides the method value.
Can you think of a way to call hasOwnProperty on an object that has its
own property by that name?*/

function ObjConstr() {
    this.property_1 = "value_1",
    this.property_2 = "value_2",
    this.property_3 = "value_3",
    this.hasOwnProperty = "I was hasOwnProperty"
  }
  
  let ownProp = ObjConstr.prototype.hasOwnProperty;
  ObjConstr.prototype.ownProperty = ownProp;
  
  let obj = new ObjConstr();
  console.log(obj.property_1);
  console.log(obj.hasOwnProperty);
  console.log(obj.ownProperty("property_1"));