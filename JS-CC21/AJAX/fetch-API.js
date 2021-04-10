// Fetch API

// fetch('mel.json').then((response) => {
//     console.log('Resolved', response)
//     return response.json();
// }).then(data => {
//     console.log(data)
// }).catch((error) => {
//     console.log('Rejected', error)
// });


// Async and Await

// this will always return a promis since we put async on our function
const getTodos = async() => {
    const response = await fetch('mel.json');
    const data = await response.json();
    // console.log(data)

    return data;
};

// getTodos().then(data => {
//     console.log('resolved: ', data)
// });

// Shorter and cleaner way

console.log(1)
console.log(2)

getTodos()
    .then(data => console.log('resolved: ', data));

// // try set time out
// setTimeout(() => {
//     getTodos()
//         .then(data => console.log('resolved: ', data));
// }, 3000) // still non blocking

console.log(3)
console.log(4)

// const test = getTodos();
// console.log(test)
