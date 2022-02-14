let val;


// Whole document
val = document;
val = document.all;
// Access the document through index
val = document.all[3];
// Counts all the elements inside the document
val = document.all.length;
val = document.head
val = document.body;
val = document.doctype;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// We can also access forms
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// we can also access all links inside the document
val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

// we can also access all images
val = document.images;

// we can also access all scrips
val = document.scripts;
val = document.scripts[0].getAttribute('src');

// document scripts cannot access by forEach because forEach is for array only
// Make an array inside the document of scripts 
let scripts = document.scripts;
let scripstArr = Array.from(scripts);

scripstArr.forEach(function (script) {
    console.log(script.getAttribute('src'));
});

console.log(val);