// FUNCTION DECLARATION

// function greet() {
//     // console.log('hello');
//     return 'Hello';
// }

function greet(firstName, lastName) {
    // console.log('hello');
    return `Hello ${firstName} ${lastName}`;
}
console.log(greet('John', 'Doe'));

// FUNCTION EXPRESSION
const square = function (x) {
    return x * x;
};

// console.log(square(8));

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function () {
//     console.log('IIFEs Run...')
// })()

// (function (name) {
//     console.log(`Hello there ${name}`)
// })('MEL')

// PROPERTY METHODS - in JS we can add also a function inside an object
const todo = {
    add: function () {
        console.log('Add to do')
    },
    edit: function(id) {
        console.log(`Edit to do ${id}`)
    }
}

// we can add property also outside an objects
todo.delete = function () {
    console.log('Delete to do...')
}


todo.add();
todo.edit(22);
todo.delete();