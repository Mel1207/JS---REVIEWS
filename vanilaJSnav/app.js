'use strict'

const navlinkAll = document.querySelectorAll('.nav-link');

navlinkAll.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()

        const id = link.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: "smooth"
        })
    })
})