// variables and block scope
let age = 30; /* this a global scope and can be accessed anywhere */


if (true) {
    age = 40; /* this is now a local scope variable - this scope can only accessed inside of this block code*/
    let name = 'Mel'
    console.log('inside 1st code block: ', age, name)

    if(true) {
        let age  = 50;
        console.log('inside 2nd code block', age); /* this will get the value of the nearest variable inside the code block - means this will prefer the local */
    }
}

console.log('outside code block: ', age, name);