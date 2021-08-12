'use strict'

const tabBtn = document.querySelectorAll('.tab-item-btn');
const tabBtnContainer = document.querySelector('.tabbed-items-container');
const tabContent = document.querySelectorAll('.tab-items-content');

tabBtnContainer.addEventListener('click', (e) => {
    const cliked = e.target.closest('.tab-item-btn');

    // guard clause
    if(!cliked) return

    // remove class on not active tab
    tabBtn.forEach(btn => {
        btn.classList.remove('tab-active')
    })

    cliked.classList.add('tab-active');

    tabContent.forEach(tab => {
        tab.classList.remove('items-content-active');
    })
    console.log(cliked.dataset.items)
    document.querySelector(`.items-content-${cliked.dataset.items}`).classList.add('items-content-active')

})