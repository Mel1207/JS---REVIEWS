let val;

const list = document.querySelector('ul.list-group');
const listItem = document.querySelector('li.list-group-item:first-child');

val = listItem;
val = list;

// get Child nodes
val = list.childNodes;
val = list.childNodes[1];
val = list.childNodes[1].nodeName;
val = list.childNodes[1].nodeType;

// the numbers below represents the type of nodes
// 1 - Element
// 2 - Attrubute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itslef
// 10 - Doctype

// get Children Element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello Mel';

// Children of children
val = list.children[3].children[0]; // Output will be undefined kasi wala naman children sa loob ng list item kundi text element lang
// we can add also an id inside
// list.children[3].children[0].id = 'Test-link';

// first Child
val = list.firstChild;
val = list.firstElementChild;

// last Child
val = list.lastChild;
val = list.lastElementChild;

// we can also get the count
val = list.childElementCount; // Output will be 5 because list has 5 list item childs

// Get Parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next siblings
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

// Get previous siblings
val = listItem.previousSibling;
val = listItem.previousElementSibling; // output will be null because list has no first element siblings


console.log(val);