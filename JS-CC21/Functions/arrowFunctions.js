//  ------------------------------------------------- //
// regular function 
// const calcArea = function (radius) {
//     return 3.14 * radius**2;
// }


// arrow function
// const calcArea = (radius) => {
//     return 3.14* radius**2;
// }

// Shorter arrow function
// note: this will only work if we have exact 1 parameter and we can remove the parenthesis
// const calcArea = radius => {
//     return 3.14* radius**2;
// }

// shortest arrow function 
// const calcArea = radius => 3.14* radius**2;

// const area = calcArea(10);
// console.log('area is: ', area);

//  ------------------------------------------------- //
// Practice arrow functions
// Regular function
// const greet = function (name) {
//     return `Hey world! and Hey ${name}`;
// };

// Arrow functions
// const greet = (name) => {
//     return `Hey world and hey ${name}`
// };

// Shorter arrow function
// const greet = name => {
//     return `Hey world and hey ${name}`
// };

// Shortest arrow fuctions
// const greet = name => `Hey world and hey ${name}`;
// console.log(greet('Mel'));

// Practice arrow functions
// regular functions 
// const bill = function (products, tax) {
//     let total = 0;
//     for (i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// Arrow function
// const bill = (products, tax) => {
//     total = 0;
//     for (i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

console.log(bill([10, 15, 30], 0.2));