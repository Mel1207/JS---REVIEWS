document.getElementById('button').addEventListener('click', loadData);

function loadData () {
    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // OPEN - Property: Specify the type of request we want to make and the URL or file name we want to make it trhroug
    xhr.open('GET', 'data.txt', true);

    // console.log('READYSTATE', xhr.readyState);

    // Optional - Used for spinners/loaders
    xhr.onprogress = function () {
        console.log('READYSTATE', xhr.readyState);
    }

    // Example 1 - newest process
    xhr.onload = function () {
        console.log('READYSTATE', xhr.readyState);
        if (this.status === 200) {
            console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
        // HTTP Statuses
        // 200: "OK"
        // 403: "Forbidden"
        // 404: "Not Found"
    }

    // Example 2 - old syntax
    // xhr.onreadystatechange = function () {
    //     console.log('READYSTATE', xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText)
    //     }
    // }

    // If Error Exist in fetching
    xhr.onerror = function () {
        console.log('request error');
    }
    xhr.send();

    // readyState Values
    //  0: request not included
    //  1: server connection failed
    //  3: request recived
    //  4: request finished and response is ready

}