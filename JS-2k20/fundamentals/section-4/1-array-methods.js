// Array
const numbers = [12, 52, 33, 89, 44, 2];
const number2 = new Array(22, 25, 78, 56, 1);
const favFruits = ['Mango', 'Pineapple', 'Banana', 'Chico',];
const mixedArr = [22, 'Mel', 'Apple', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// get the array length
val = numbers.length;

// check if it is array
val = Array.isArray(numbers);

// get a single value
val = numbers[0]; // output will be 12 because in js is 0 base

// insert into array
numbers[0] = 100;

// find index of value
val = numbers.indexOf(2); // output will be 5

// MUTATING ARRAYS
// push()
numbers.push(250); // add to the end of array

// unshift() 
numbers.unshift(300); // add to the beginning of array

// pop()
numbers.pop(); // take off from end

// shift()
numbers.shift() // take off from front

// splice()
numbers.splice(1,1); // same slice

// reverse()
numbers.reverse(); // the array will reverse

// concat()
val = numbers.concat(number2); // it will combine the two arrays

// SORTING ARRAYS - sort()
// val = favFruits.sort(); // it will arrange your arrays to alphabetical
// val = numbers.sort(); // It will sort only the first number to read. not the whole number

// Use the "compare function"
val = numbers.sort(function (x, y) {
    return x - y;
}); // it will sort the array from smallest to largest

// reverse sort
val = numbers.sort(function (x, y) {
    return y - x;
}); // it will sort the array from largest to lowest

// Find
function under50(num) {
    return num < 50;
}

function over50(num) {
    return num > 50;
}

val = numbers.find(over50);


// output
console.log(numbers);
console.log(val);