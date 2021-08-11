'use strict'

const navlinkAll = document.querySelectorAll('.nav-link');
const navLinks = document.querySelector('.nav-links');

// old and inneficient syntax
// navlinkAll.forEach(link => {
//     link.addEventListener('click', e => {
//         e.preventDefault()

//         const id = link.getAttribute('href');

//         document.querySelector(id).scrollIntoView({
//             behavior: "smooth"
//         })
//     })
// })

// event delegation process
navLinks.addEventListener('click', e => {
    e.preventDefault();

    // element match making or validating
    if(e.target.classList.contains('nav-link')) {
        const id = e.target.getAttribute('href');
        console.log(id)

        document.querySelector(id).scrollIntoView({
            behavior: "smooth"
        })
    }
})
