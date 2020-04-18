let value;

// ------------------------------------------------------------------------------------//

// Number to String - regular conversion
value = 5;
value = String(5);
value = String(5 + 5);
value = String(5) + '5';
// .toString function convert any input into string
value = (5).toString();
value = (5 + 20).toString();

// Boolean to String
value = String(true);
value = true.toString();

// Date to String
value = new Date().toString(); // This will output a date object
value = new Date().toDateString(); // This will output a regular string Date - Sat Apr 18, 2020

// Array to String
value = String([1,2,3,4]);
value = [2,4,5].toString();

// ------------------------------------------------------------------------------------//

// Stings to numbers - regular conversion
value = '5';
value = Number('5');

// Boolean to number
value = Number(true); // output 1
value = Number(false); // output 0
value = Number(null); // output 0

// Arrays to number 
value = Number(['5', '4', '3', '2', '1']); // NAN
value = Number([5, 4 , 3, 2, 1]); // NAN
value = Number('hello'); // NAN

value = parseInt('100'); // value = 100
value = parseInt('100.30'); // value = 100 because parseInt converts string into integer / whole number ony
value = parseFloat('100.30'); // value = 100.3 it is by default browser do not include 0


// Output
console.log(value);
console.log(typeof value);
// console.log(value.length); // This will return value of 7 because it counts even the (,)
console.log(value.toFixed());
console.log(value.toFixed(2)); // to include all the decimal 

// ------------------------------------------------------------------------------------//

// TYPE COERSION - Type Coercion is the conversion of one type of object to a new object of a different type with similar content. Tapestry frequently must coerce objects from one type to another.

// TYPE COERSION - is a method which we passed the conversion to javascript itself

// EX-1
const value1 = 5;
const value2 = 10;
const sum = value1 + value2;

// Output
console.log(sum);
console.log(typeof sum);

// EX-2
const number1 = '5';
const number2 = 6;
const numSum = parseInt(number1 + number2);

// Output
console.log(numSum); // output will be 56
console.log(typeof numSum); // output will be string


