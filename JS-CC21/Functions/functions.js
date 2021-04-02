// function declaration - means we declare function
function greet () {
    console.log('hello there');
}

// greet(); /* This is called function caller */
// greet(); /* This is called function caller */

// function expression
// notes - function expression needs to have commas at the end
const speak = function () {
    console.log('Hi mel');
};

speak();
speak();
speak();


// notes - function declaration and function expression behaves the same way but it will be different on hoisting
// hoisting - this will works only on function declaration means - pwede mo ma call agad yung function bago mo idefine.

// hoisting example
// greet();

// function greet() {
//     console.log('kamusta mel');
// } /*even we called the function first the code block stull runs because of hoisting */

