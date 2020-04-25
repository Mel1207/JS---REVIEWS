// document.getElementsByClassName

// const items = document.getElementsByClassName('list-group-item');

// // the DOM can provide an HTML collection just like an array form so we can access each one by its index
// console.log(items);
// console.log(items[0]);

// // we can style each by targeting the index
// items[0].style.color = 'red';
// items[1].textContent = 'TEST SAMPLE';

// // we can target multiple elements outside the list by targeting its parent
// const list = document.querySelector('ul').getElementsByClassName('list-group-item');
// console.log(list);

// we can target multiple elements by tag Name
// let lis = document.getElementsByTagName('li');
// // console.log(lis);
// // console.log(lis[0]);
// // we can style each by targeting the index
// lis[0].style.color = 'red'; 
// lis[3].textContent = 'red';  


// // Convert HTML collection into an Array
// lis = Array.from(lis);

// lis.reverse();
// lis.forEach(function (li, index) {
//     console.log(li.className);
//     // li.textContent = 'Subscribe';
//     li.textContent = `${index}: Subscribe`;
// });

// console.log(lis);

// ---------------------------------------------------------------------------------- //
// document.querySelectorAll()

const items = document.querySelectorAll('ul.list-group li.list-group-item');

items.forEach((item, index) => {
    // item.textContent = 'Hello Subscribers'
    item.textContent = `${index}: Hello Subscribers`
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach((li) => {
    li.style.background = '#eee';
});

// liEven.forEach((li) => {
//     li.style.background = '#ccc';
// });

for(let i = 0; i < liEven.length; i++) {    
    liEven[i].style.background = 'red';
}

console.log(items);
