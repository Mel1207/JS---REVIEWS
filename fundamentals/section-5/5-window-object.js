// WINDOW METHODS OBJECTS AND PROPERTIES

// console.log(123);

// Alert
// window.alert('Hello World!');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if (confirm('are you sure?')) {
//     console.log('yes!');
// } else {
//     console.log('no!');
// }


let val;

// Outer height and width

val = window.outerHeight;
val = outerWidth; // outer edges

// inner height and width

val = window.innerHeight;
val = window.innerWidth; // outer edges


// Scroll points
val = window.scrollY;
val = window.scrollX;

// location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.search;

// Redirect
// window.location.href = 'http://google.com';
// Reload
// window.location.reload();


// History object
// window.history.go(-1) // it will go back to the history depends on parameters
// val = window.history.length;

// Navigator object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);
