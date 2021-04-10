const getTodos = (callBack) => {
    
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {

        if(request.readyState === 4 && request.status === 200) {
            callBack(undefined, request.responseText);
        } else if (request.readyState === 4) {
            callBack('Could not fetch date', undefined);
        }

        // console.log(request, request.readyState);
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
}

// since the lesson is all about asyncronous code, it means all our code below will run, and hindi iboblock nung async function yung natitirang code dahil meron syang callback, it means tutuloy yung block of codes sa ibaba, while si async ay nag rurun in background while gathering data, and ibabalik nya lahat after nyang matapos.

console.log(1);
console.log(2);

getTodos((error, data) => {
    console.log('callback fired');
    // console.log(error, data);
    if(error) {
        console.log(error);
    } else {
        console.log(data);
    }
});

console.log(3);
console.log(4);