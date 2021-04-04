// arguments and parameters

// const speak = function (name, time) { /* the value inside () is called parameters - its like a local variable that can access inside only of this code block */
//     console.log(`good ${time} ${name}`);
// }

// speak('Mel', 'morning'); /* the value inside '' are called arguments */
// speak(); output will be undefined

// const calcArea = function (radius) {
//     let area = 3.14 * radius**2;
//     // console.log(area);
//     return area;
// }

// const area = calcArea(10);
// console.log(area);

// cleaner version

// const calcArea = function (radius) {
//     return 3.14 * radius**2
// };

// const area = calcArea(10);
// console.log(area);

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
const calcArea = radius => {
    return 3.14* radius**2;
}


const area = calcArea(10);
console.log('area is: ', area);