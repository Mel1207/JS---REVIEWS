// variables and block scope
let age = 30; /* this a global scope and can be accessed anywhere */


if (true) {
    age = 40; /* this is now a local scope variable - this scope can only accessed inside of this block code*/
    let name = 'Mel'
    console.log('inside 1st code block: ', age, name)
}

console.log('outside code block: ', age, name)