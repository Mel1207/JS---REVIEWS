const getTodos = (callBack) => {
    
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {

        if(request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText)
            callBack(undefined, data);
        } else if (request.readyState === 4) {
            callBack('Could not fetch date', undefined);
        }
    });

    // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    // example json created
    request.open('GET', 'todos.json');
    request.send();
}

getTodos((error, data) => {
    console.log('callback fired');
    if(error) {
        console.log(error);
    } else {
        console.log(data);
    }
});
