// document.getElementById()

// checking the element by id
// console.log(document.getElementById('textSample'));
// // check the element id
// console.log(document.getElementById('textSample').id);
// console.log(document.getElementById('textSample').className);

// // Change styles
// document.getElementById('textSample').style.background = 'red';
// document.getElementById('textSample').style.padding = '5px 0';
// document.getElementById('textSample').style.color = '#fff';
// document.getElementById('textSample').style.display = 'none';
// document.getElementById('textSample').style.display = 'block';

// // Change the content
// document.getElementById('textSample').textContent = 'Hello Mel';
// document.getElementById('textSample').innerText = 'Hello John';
// document.getElementById('textSample').innerHTML = '<span style="color: red; background: #eee;">Test Sample</span>';

// document.querySelector()
// check Dom using query selector
// . - for class selector
console.log(document.querySelector('.text-center'));
// # - for id selector
console.log(document.querySelector('#textSample'));
// we can also select the element itself - NOTE THE FIRST ELEMENT WILL ONLY BE SELECTED
console.log(document.querySelector('h1'));

// we can target also elements in list
// only the first li on list can be targeted
document.querySelector('li').style.color = 'red';
// we can target also a nested elements
document.querySelector('ul li').style.color = 'blue';

// we can target also other li in the list by determining its index
document.querySelector('li:last-child').style.background = '#eee';
document.querySelector('li:nth-child(3)').style.background = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello Mel';
document.querySelector('li:nth-child(odd)').style.background = '#ccc'; // Noticed that only the first odd is targeted
document.querySelector('li:nth-child(even)').style.background = '#eee'; // Noticed that only the first even is targeted



