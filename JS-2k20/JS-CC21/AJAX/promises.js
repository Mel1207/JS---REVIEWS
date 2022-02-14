const getTodos = (resource, callBack) => {
    
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {

            if(request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data)
                // callBack(undefined, data);
            } else if (request.readyState === 4) {
                // callBack('Could not fetch date', undefined);
                reject('Errpr getting resource')
            }
        });
        request.open('GET', resource);
        request.send();
    });
}

getTodos('mel.json').then(data => {
    console.log('Promise 1 resolved:', data);
    return getTodos('juvy.json');
}).then((data) => {
    console.log('Promise 2 resolve:', data);
    return getTodos('john.json')
}).then((data) => {
    console.log('Promise 3 resolve:', data);
}).catch(error => {
    console.log('Promise rejected:', error)
})

// getTodos('mel.json', (error, data) => {
//     console.log(data);
//     getTodos('juvy.json', (error, data) => {
//         console.log(data);
//         getTodos('john.json', (error, data) => {
//             console.log(data);
//         })
//     });
// });

// promises
// const getSomething = () => {
//     return new Promise ((resolve, reject) => {
//         // fetch something
//         resolve('some data');
//         // reject('some error');
//     });
// }

// call 
// getSomething().then((data) => {
//     console.log(data);
// }, (error) => {
//     console.log(error);
// });

// another short way
// getSomething().then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log(error);
// })