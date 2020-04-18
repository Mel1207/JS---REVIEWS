const firstName = 'Mel John';
const lastName = 'Pualon';
const age = 25;
let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Mel ';
val += 'Pualon';
val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping - if there are strings that has a single quote required in their word javascript automatically read those quotes as end of the statement so here are options that you can use for that
val = "OH That's awesome, I can't wait;" // first option is to use ("") double quotes
val = 'OH That\'s awesome, I can\'t wait'; // second option is to use (\\) forward slash before the single quotes

// lenght
val = (firstName + lastName).length;

// Concat
val = firstName.concat(' ', lastName); // the same we used in line 14

// Change case
val = firstName.toUpperCase(); // Change String to uppercase 
val = lastName.toLowerCase(); // Change Stromg to lowercase

// Finding index
val = firstName[0]; // Output will be M

// indexOf() - is a method that will locate the first index you are looking / kung ano ang pinaka una
val = firstName.indexOf('n'); // Output will be 7 

// lastIndexOf() - is a method that will locate the last index you are looking / kung ano ang pinaka huli
val = lastName.lastIndexOf('n'); // Output will be 5

// charAt()
val = firstName.charAt('2'); // output will be l

// Get the last char
val = firstName.charAt(firstName.length - 1); // output will be n because we locate the last character / observe firstName.length -1

// substring - extract characters from the string
val = firstName.substring(1, 5); // Output will be el J

// slice() - similar to substring
val = firstName.slice(1, 5); // Output will be el J

// split()
const statement = 'hello there my name is ' + firstName + ' ' + lastName + ' and i am ' + age;
val = statement.split(' '); // Output will be an array of word without space - because split uses to separate the statement by ' ' space

const hobbies = 'Web design,web development,OOP,Watching Tutorials,UI Design,Prototyping,mockup';
val = hobbies.split(','); // Output will be an array of word without space - because split uses to separate the statement by ',' comma

// replace()
val = statement.replace('hello', 'hi'); // replace the word hello to hi from statement output

// includes()
val = statement.includes('hello'); // output will be true becase statement includes the word hello

console.log(val);
