// const color = 'teal';
// const obj = {};
// obj.color = '#008080';
// obj[color] = '#008080';

// Object.keys(obj);
// This gives an array of all of the keys in an object
// All keys get stringified

// Object.values(obj);
// This gives an array of all of the values in an object

// Object.entries(obj);
// This gives an array of arrays containing each of the key-value pairs

// for (let [k,v] of Object.entries(obj)) {
//     console.log(k,v);
// }

// Can add a function to object
// const add = (x,y) => x + y;
// const mult = (x,y) => x * y;
// const square = (x) => x * x;
// const power = (x,y) => x ** y;

// const myMath = {};
// myMath.add = add;
// myMath.mult = mult;

// const myMath = {add, mult, square, power};

// const myMath = {
//     add: function(x,y) {
//         return x + y;
//     },
//     mult: function(x,y) {
//         return x * y;
//     },
//     square: function(x) {
//         return x * x;
//     },
//     power: function(x,y) {
//         return x ** y;
//     }
// }

// const myMath = {
//     add(x,y) {
//         x + y
//     },
//     mult(x,y) {
//         x * y
//     },
//     square(x) {
//         x * x
//     },
//     power(x,y) {
//         x ** y
//     }
// }

// function getHypotenuse(a,b) {
//     return Math.sqrt(a ** 2 + b ** 2);
// }

// function getArea(a,b) {
//     return a * b / 2;
// }

// const rightTriangle = {
//     a: 9,
//     b: 12,
//     getArea() {
//         return this.a * this.b / 2;
//     },
//     getHypotenuse() {
//         return Math.sqrt(this.a ** 2 + this.b ** 2);
//     }
// };
// Cannot use this with arrow functions because it refers to the wrong scope

// Object Templates

// function Triangle(a,b) {
//     this.a = a;
//     this.b = b;
//     this.getArea = function() {
//         return this.a * this.b / 2;
//     };
//     this.getHypotenuse = function() {
//         return Math.sqrt(this.a ** 2 + this.b ** 2);
//     };
// }

// const t1 = new Triangle(3,4);
// This will make a trianle by calling the Triangle function with a = 3 and b = 4

// const t2 = new Triangle(9,12);
// This will make a trianle by calling the Triangle function with a = 9 and b = 12

// We can get the area/hypotenuse of the triangle by calling t1.getArea or t1.getHypotenuse

// We can also store the functions using prototype

// function Triangle(a,b) {
//     this.a = a;
//     this.b = b;
// }

// Triangle.prototype.getArea =  function() {
//     return this.a * this.b / 2;
// };

// Triangle.prototype.getHypotenuse = function() {
//     return Math.sqrt(this.a ** 2 + this.b ** 2);
// };



// Using a class is a better way to do this

// class Triangle {
//     constructor(a,b,c) {
//         for (let side of [a,b,c]) {
//             if (!Number.isFinite(side) || side <= 0) {
//                 throw new Error('Sides must be positive numbers');
//             }
//         }
        
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }
//     display() {
//         return `Triangle with sides of ${this.a}, ${this.b} and ${this.c}`;
//     }
//     getArea() {
//         const {a,b,c} = this;
//         const s = (a + b + c) / 2;
//         return Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     }
//     isBig() {
//         return this.getArea() > 50;
//         // Returns true if area > 50
//     }
// }

// class RightTriangle extends Triangle {
//     constructor(a,b,c) {
//         if (a * a + b * b !== c * c) {
//             throw new Error('Invalid hypotenuse for right triangle!'); 
//         }
//         super(a,b,c);
//         this.hypotenuse = c;
//         // This calls the constructor of the super class
//         // Must call super before you can use this
//     }
//     isRightTriangle() {
//         return true;
//     }
//     display() {
//         return "Right " + super.display()
    
//     }
// }


// ***Exercise***

// Part 1

class Vehicle {
    constructor(make, model, year) {
        const carData = [make,model,year]
        if (carData.length < 3) {
            return "You're missing some data"
        }
    this.make = make;
    this.model = model;
    this.year = year;
    }
    honk() {
        return 'Beep.';
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
        
    }
};

const newVehicle = new Vehicle('Honda', 'Civic', '2004');

// Part 2

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make,model,year);
        this.numWheels = 4;
    }
};

const myFirstCar = new Car('Toyota', 'Corolla', '2005');

// Part 3

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make,model,year);
        this.numWheels = 2;
    }
    revEngine() {
        return 'VROOM!!!';
    }
};

const myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

// Part 4

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
      }
    
      add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
          return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity) {
          return "Sorry, we're full.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
      }
};

const garage = new Garage(2);
