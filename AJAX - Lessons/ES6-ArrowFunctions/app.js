// Function Expression
const sayHello = function () {
    console.log('Hello There');
}

sayHello();

// Arrow Function
const sayCheese = () => {
    console.log('CHEEESE!');
}

sayCheese();

// One line function does not need brackets
const sayGreat = () => console.log('GREAT!');

sayGreat();

// One line function can be done in this way
const sayOla = () => `OLAAAA!` // if output is from return method

console.log(sayOla()); // need to console the whole function to run

// Return Object 
const sayNani = () => ({ message: 'Naniii?' }) // neede to wrap the whole object in parenthesis

console.log(sayNani());

// Single parameteres in arrow functions does not need parenthesis
const helloName = name => console.log(`Hello ${name}`); // not if we are using two or more parameters on our function we have to use parenthesis
helloName('Mel John Pualon');

// Multiple parameters need parenthesis
const helloFullName = (firstName, lastName) => console.log(`Hello There ${firstName} ${lastName}`); 
helloFullName('Mel John', 'Pualon');

// Regular Arrays
// const users = ['Mel', 'John', 'Doe'];
// const nameLengths = users.map(function(name) {
//     return name.length
// });

// Arrow function in arrays - Shorter
const users = ['Mel', 'John', 'Doe'];
// const nameLengths = users.map ((name) => {
//     return name.length
// });

// Arrow function in arrays - Shorteest
const nameLengths = users.map (name => name.length); // You can remove the return method, curly braces and parenthesis.
console.log(nameLengths)