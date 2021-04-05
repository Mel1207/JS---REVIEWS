// note: In JavaScript, a variable may store two types of values: primitive and reference.
// JavaScript provides six primitive types as undefined, null, boolean, number, string, and symbol , and a reference type object.
// The size of a primitive value is fixed, therefore, JavaScript stores the primitive value on the stack.
// On the other hand, the size of a reference value is dynamic so JavaScript stores the reference value on the heap.
// When you assign a value to a variable, the JavaScript engine will determine whether the value is a primitive or reference value.
// If the value is a primitive value, when you access the variable, you manipulate the actual value stored in that variable. In other words, the variable that stores a primitive value is accessed by value.
// Unlike a primitive value, when you manipulate an object, you work on the reference of that object, rather than the actual object. It means a variable that stores an object is accessed by reference.


// Primitive Values 
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);


// Reference Values
const userOne = {name: 'Mel', age: 30};
const userTwo = {userOne};

console.log(userOne, userTwo);