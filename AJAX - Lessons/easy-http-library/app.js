const http = new easyHttp;

// get post
http.get('https://jsonplaceholder.typicode.com/posts', function(error, response) {
    if (error) {
        console.log(error)
    } else {
        console.log(response)
    }
});