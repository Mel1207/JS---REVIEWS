'use strict'

const body = document.querySelector('body');

// const fetchAPI = async function (height, width) {
   
//     fetch(`https://picsum.photos/id/1/${height}/${width}`).then(res => {
//         return res
//     }).then(data => {
//         console.log(data)

//         const html = `
//             <div class="image">
//                 <img src="${data.url}">
//             </div>
//         `

//         body.insertAdjacentHTML('beforeend', html)
//     })
// }

// fetchAPI(100, 200)





const fetchJson = async function() {
    fetch('js/blogs.json')
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data)

        data.forEach(blog => {

            const html = `
                <h2>Title: ${blog.title} </h2>
                <h3>Author: ${blog.author}</h3>
                <h4>Blog</h4>
                <p>${blog.body}</p>
            `

            body.insertAdjacentHTML('beforeend', html)
        })
    })
}

fetchJson()