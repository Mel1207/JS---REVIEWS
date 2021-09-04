'use strict'

const body = document.querySelector('body');

const fetchAPI = async function (height, width) {
   
    fetch(`https://picsum.photos/id/1/${height}/${width}`).then(res => {
        return res
    }).then(data => {
        console.log(data)

        const html = `
            <div class="image">
                <img src="${data.url}">
            </div>
        `

        body.insertAdjacentHTML('beforeend', html)
    })
}

fetchAPI(100, 200)