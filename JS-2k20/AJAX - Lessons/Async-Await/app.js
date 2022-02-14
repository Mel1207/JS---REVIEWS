// Regular Function Expression
// function sampleFunction () {
//     return 'Hello'
// }

// console.log(sampleFunction());

// Async and Await
// async function sampleFunction () { 
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('hello'), 1000);
//     });

//     const error = false;

//     if(!error) {
//         const res = await promise; // wait until promise is resolve
//         return res;
//     } else {
//         await promise.reject(new Error('Something went wrong!'));
//     }
// }

// sampleFunction()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

async function getUsers() {
    // await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');


    // Only Proceed once is resolved
    const data = await response.json();

    return data;
}

getUsers().then(users => console.log(users));