// SERVER SIDE - This is only mimic
const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'},
]

// Synchronous functions
// function createPost (post) {
//     setTimeout(function(){
//         posts.push(post);
//     }, 2000);
// }

// function getPost () {
//     setTimeout(function () {
//         let output = '';
//         posts.forEach(function(post) {
//             output += `<li>${post.title}</li>`
//         });

//         document.body.innerHTML = output;

//     }, 1000)
// }

// createPost({title: 'Post Three', body: 'This is post three'});

// getPost();


// Asynchronous functions
// Callback - is a function can be passed in to another function and called within that function
function createPost (post, callBack) {
    setTimeout(function(){
        posts.push(post);
        callBack(); // Call back is now called
    }, 2000);
}

function getPost () {
    setTimeout(function () {
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`
        });

        document.body.innerHTML = output;

    }, 1000)
}

createPost({title: 'Post Three', body: 'This is post three'}, getPost);