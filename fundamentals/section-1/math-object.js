const num1 = 100;
const num2 = 50;
let val;

// Simple math operators with numbers
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// Math object
val = Math.PI;
val = Math.E;
val = Math.round(2.8); // Round of a number
val = Math.ceil(2.8); // Round of a number to lower
val = Math.floor(2.8); // Round of a number to higher
val = Math.sqrt(64); // Get the square root
val = Math.abs(-3); // get the absolute value
val = Math.pow(8, 2); // multiply number to its power
val = Math.min(2,3,33,100,8,-2); // get the min number
val = Math.max(2,3,33,100,8,-2); // get the max number
val = Math.random(); // will provide a random decimal number
val = Math.random() * 20; // It will provide a whole number with decimal
val = Math.floor(Math.random() * 20 + 1); // It will provide a whole number only because of math.floor || math.ceil

// output 
console.log(val);