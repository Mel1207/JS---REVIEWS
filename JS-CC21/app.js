// alert('hello world'); - this is an alert
// this is a comment - comment is use to add comment on your code and it cant be seen on the browser
// /* */ this is a multi line comment
// console.log('hello world'); - This is a console

// Variables in js
// var firstName = "lisa";
// let is a type of variable can be change
// let firsName = "lisa";
// firstName = "Mel"
// let age = 25;
// age = 30;


// JS data types
/* Number - 1,2,3,100,1.14
String - "hi world", 'hi world'
Boolean - true / false
Null - means no vaule
Undefined - variables that have not yet been defined
Object - complex data structures - arrays , dates, literals etc
Symbol - Used with objects */

// Strings
console.log('Hello world');
let email = 'mel@gmail.com';
console.log(email)

// String Concatenation - combining or joining strings
let firstName = 'Mel'
let lastName = 'Pualon'
let fullName = firstName + ' ' + lastName;
console.log(fullName)

// getting characters
// tip - JS is zero based counting it means it start count on 0
console.log(fullName[1]);

// String length - count the characters in numbers
console.log(fullName.length);

// String methods
console.log(fullName.toUpperCase()); 
console.log(fullName.toLowerCase());

let fullNameLowerCase = fullName.toLowerCase();
console.log(fullNameLowerCase);

let index = email.indexOf('@');
console.log(index)

