// Create Element
const li = document.createElement('li');

// add class
li.className = 'list-group-item';

// add an id
li.id = 'myList';

// add attribute
li.setAttribute('title', 'New item');

// create text node and append
li.appendChild(document.createTextNode('Hello Mel'));

// append li as child to ul
document.querySelector('ul.list-group').appendChild(li);

console.log(li);