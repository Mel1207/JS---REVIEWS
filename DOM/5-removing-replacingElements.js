// Replacing Elements

// create Element
const newHeading = document.createElement('h2');

// add id
newHeading.id = 'task-title';
// new text node
newHeading.appendChild(document.createTextNode('Task List Replacement'));

// get the old element
const oldHeading = document.getElementById('task-title');

// get the parent
const card = document.querySelector('.card-body');

// replace child by parent
card.replaceChild(newHeading, oldHeading);

// remove Element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// remove list item
lis[0].remove();

// remove child element
list.removeChild(lis[3]);

// ----------------------------------------------------------------------------- //
// classes and attributes 
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

val = link.className;
val = link.classList;
val = link.classList[0]
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
link.removeAttribute('title');
val = link.hasAttribute('title');

console.log(val);



