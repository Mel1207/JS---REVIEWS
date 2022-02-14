// Strings

const name = 'Mel';
const name2 = new String('Mel');

console.log(name2);

// Check the type of variable 
console.log(typeof name2);


// Short Evaluation
if (name2 === 'Mel') {
    console.log('It is a string - True');
} else {
    console.log('Not a string - False');
}

// Numbers 
const number = 1;
const number2 = new Number(5)

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function 
const getsum1 = function(x,y) {
    return x + y; 
}
const getsum2 = new Function ('x', 'y', 'return 1+1');

// Object 
const person = {
    name: 'Mel'
}
const person2 = new Object ({name: "Mel"})

// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4)

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

// Most of these are not necessary used in development