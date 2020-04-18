let val;

const today = new Date();

// JS can accept any of this format
let birthday = new Date('9-10-1981');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

// val = today; // output the date in standard europian time
// val = today.toString()
val = today.getMonth(); // it will get the value of current month in 0 base / April = 3
val = today.getDate(); // it will get the value of day today 
val = today.getDay(); // it will get the index of day in 0 base / sunday = 0
val = today.getFullYear(); // it will output the full year only
val = today.getHours(); // it will get the current time today
val = today.getMinutes(); // it will get the current minute of time today
val = today.getMilliseconds(); // get the milliseconds
val = today.getTime(); // it will get the time stamp

// set date methods
birthday.setMonth(1); // set the month
birthday.setDate(12); // set the date
birthday.setFullYear(2020); // set the full year
birthday.setHours(4); // set the time
birthday.setMinutes(20); // set the minutes
birthday.setSeconds(25); // set the seconds
birthday.setUTCDate(0) // set the day

console.log(birthday);