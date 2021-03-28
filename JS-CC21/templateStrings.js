// Template Strings
const title = 'Best of 2021';
const author = 'Mel';
const likes = 30;

// Concatenation way - old way of combining
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result)

// Template string way
// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);


// Creating HTML templates 
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes
`;

console.log(html);