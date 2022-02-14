// Basic Syntax of if else statement

// if (something = true) {
//     do something
// } else {
//     do something else
// }

const id = 100;

// EQUAL TO
// if (id == 101) {
//     console.log('CORRECT!');
// } else {
//     console.log('INCORRECT!')
// }

// // NOT EQUAL TO
// if (id != 101) {
//     console.log('CORRECT!');
// } else {
//     console.log('INCORRECT!')
// }

// // === EQUAL TO VALUE AND TYPE
// if (id === 100) {
//     console.log('CORRECT!');
// } else {
//     console.log('INCORRECT!')
// }

// // !== NOT EQUAL TO VALUE AND TYPE
// if (id !== 100) {
//     console.log('CORRECT!');
// } else {
//     console.log('INCORRECT!')
// }


// TEST IF UNDEFINED
// if (typeof id !== 'undefined') {
//     console.log(`The id is ${id}`);
// } else {
//     console.log('No Id');
// }

// GREATE OR LESS THAN
// if (id <= 100) {
//     console.log('CORRECT!');
// } else {
//     console.log('INCORRECT!')
// }

// IF ELSE
const color = 'red'
// if (color === 'red') {
//     console.log('Color is red')
// } else if (color === 'blue') {
//     console.log('color is blue')
// } else {
//     console.log('Color is not red or blue')
// }

// LOGICAL OPERATORS

// and &&
const name = 'Mel';
const age = '25';

if (age > 0 && age < 12) {
    console.log(`${name} is a child`)
} else if (age >= 13 && age <=19) {
    console.log(`${name} is teenager`)
} else {
    console.log(`${name} is an adult`)
}

// OR ||
if (age < 16 || age > 65) {
    console.log(`${name} cannot run in race`);
} else {
    console.log(`${name} is registered for the race`);
}

// TERNARY OPERATORS
// ? - True / Then 
// : - Else / Then
console.log(id === 100 ? 'correct' : 'incorrect');

// WITHOUT BRACES
if (id === 100)
    console.log('correct')
else 
    console.log('incorrect')