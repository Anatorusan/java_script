//creating Matrix Object

class Matrix {
    //constructor function provides initial properties to the Matrix Object and builds the matrix itself
   constructor(width, height, element = (x, y) => undefined) {
       //element parameter is optional it defines an initial value for the matrix first element
       this.width = width;
       this.height = height;
       this.content = [];
    
       for (let y = 0; y < height; y++) {
         for (let x = 0; x < width; x++) {
           this.content[y * width + x] = element(x, y);
         }
       }
     }
     get(x, y) {
       return this.content[y * this.width + x];
     }
     set(x, y, value) {
       this.content[y * this.width + x] = value;
     }
   }
   
   //creating an iterator for the matrix
   class MatrixIterator {
     constructor(matrix) {
       this.x = 0;
       this.y = 0;
       this.matrix = matrix;
     }
   
     //next() method allows an iteration step
     
   next() {
       if (this.y == this.matrix.height) return {done: true};
       //create object that will be returned on each step as value property
      
   let value = {x: this.x,
                    y: this.y,
                    value: this.matrix.get(this.x, this.y)};
       this.x++;
    if (this.x == this.matrix.width) {
         this.x = 0;
           this.y++;
       }
       return {value, done: false};
      }
    }
   
   //make Matrix eterable
   Matrix.prototype[Symbol.iterator] = function() {
      return new MatrixIterator(this);
   };
   
   //create an instance of Matrix class sized 2 x 2
   let matrix = new Matrix(5, 5, (x, y) => `value ${x},${y}`);
   for (let {x, y, value} of matrix) {
     console.log(x, y, value);
   }