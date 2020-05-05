const http = new easyHttp;

// get post
// http.get('https://jsonplaceholder.typicode.com/posts', function(error, response) {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(response)
//     }
// });

// Get single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(error, post) {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(post)
//     }
// });

// Create data
const data = {
    title: 'Custom post',
    body: 'This is a custom post'
};

// Create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, post) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(post);
//     }
// });

// Update post
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function (error, post) {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(post);
//     }
// });

// delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, response) {
    if (error) {
        console.log(error)
    } else {
        console.log(response)
    }
});
