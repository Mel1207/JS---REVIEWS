// querySelector
// const para = document.querySelector('p'); // this is a selector of css
// const para = document.querySelector('.error'); // this is a selector of class same behavior with css
// const error = document.querySelector('div.error'); // this is a selector of a class and element but with more specific selection

// console.log(para, error);

// querySelectorAll
// const paras = document.querySelectorAll('p'); - this will output nodelist 
// const errors = document.querySelectorAll('.error');

// // we can access our elements since it is an array of elements
// paras.forEach(para => {
//     console.log(para);
// });

// errors.forEach(error => {
//     console.log(error)
// });

// console.log(paras[0])

//  =====================================================  //
// get element by id
// const title = document.getElementById('page-title'); // we dont need to add id symbol since it already selecting id from the element
// console.log(title);

// getElements by class name
// const errors = document.getElementsByClassName('error');
// console.log(errors[0]) - we can still access this by square bracket notation
// note: we cant use forEach on an html collection, compared to nodelist
// errors.forEach(error => {
//     console.log(error);
// }); -- output will be Uncaught TypeError: errors.forEach is not a function at DOM.js:32

// get elements by tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras); // this will still output of html collection


//  =====================================================  //
// const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = 'you doing great!';
// append to the text
// para.innerText += 'You doing great!'

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     // console.log(para.innerText); checking all our p tags
//     para.innerText += ' this is new text';
// });

// change inner html of an element
// const content = document.querySelector('.content');
// content.innerHTML = '<h2>This is a new content of content div</h2>'
// append the new content
// content.innerHTML += '<h2>This is a new content of content div</h2>'

// console.log(content.innerHTML)


// trying to add some content inside an html element
// const content = document.querySelector('.content');
// console.log(content.innerHTML)

// const people = ['Mel', 'Juvy', 'John'];
// people.forEach(person => {
//     content.innerHTML += `<ul>
//         <li><p>${person}</p></li>
//     </ul>`
// });


// changing attributes of elemetn
// const link = document.querySelector('a');

// // use set attribute
// link.setAttribute('href', 'www.youtube.com');

// // changing a tag text content
// link.innerText = 'youtube link';

// console.log(link.getAttribute('href'));

// // 
// const mssg = document.querySelector('p.error');

// // getting the class attribute 
// // console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// // console.log(mssg.getAttribute('class'));

// // changing element style using attributes but there is another way to do with styles
// mssg.setAttribute('style', 'color: green; padding: 10px; background: rgb(99, 255, 190);');

// // 
// const title = document.querySelector('h1');
// // title.setAttribute('style', 'margin: 20px;'); // const of this is it will overwrite the attribute of style that is already inside the html

// // 
// console.log(title.style); // get all property style available
// console.log(title.style.color); // get specific style

// // changing the style
// title.style.margin = '20px'; // this will not overwrite the css written at html
// title.style.color = 'crimson'; // change color property
// title.style.fontSize = '50px'; // change font size property
// title.style.fontSize = ''; // remove css property


//  =====================================================  //




