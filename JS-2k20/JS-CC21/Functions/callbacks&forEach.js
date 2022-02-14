// Callbacks and forEach

// const myFunc = (callbackFunc) => {
//     // do something
//     let value = 50;
//     callbackFunc(value);
// };

// // myFunc(function(value) {
// //     // do something
// //     console.log(value);
// // });

// // convert arrow function
// myFunc(value => {
//     // do something
//     console.log(value);
// });


//  -------------------------------------  //
// let people = ['Mel', 'Juvy', 'John', 'Anne', 'Pualon', 'Nepomuceno'];

// people.forEach(function(person) {
//     console.log(person);
// });

// convert to arrow function 
// people.forEach(person => {
//     console.log(person)
// });

// if with 2 or more parameters
// people.forEach((index, person) => {
//     console.log(index, person);
// });

// const logPerson = (person, index) => {
//     console.log(`${index} - Hi there ${person}`);
// }

// people.forEach(logPerson);


// Practice callback
// Get a reference to the 'ul'

const ul = document.querySelector('.people');

const people = ['Mel', 'Juvy', 'John', 'Anne', 'Pualon', 'Nepomuceno'];

let html = ``;

// people.forEach(function(person){
//     // create and html template for each person
//     html += `<li style="color: red";>${person}</li>`
// });

// ul.innerHTML = html;
// console.log(html);

// convert to arrow functions

people.forEach(person => {
    html += `<li style="color: red";>${person}</li>`
});

ul.innerHTML = html;
console.log(html);