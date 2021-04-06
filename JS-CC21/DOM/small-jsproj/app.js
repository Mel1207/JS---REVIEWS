// const content = document.querySelector('p');

// console.log(content.classList) // determining class available inside an element
// content.classList.add('error'); // add class on element
// content.classList.remove('error'); // remove class on element
// content.classList.add('success'); // add class on element

// coding challenge
const pContents = document.querySelectorAll('p');
pContents.forEach(p => {
    // console.log(p.innerText);
    if (p.innerText.includes('error')) { // .innerText or textContent are both good but textContent is more secured
        // console.log('the paragraph has error')
        p.classList.add('error');
    } else if (p.innerText.includes('success')){
        // console.log('the paragraph has success')
        p.classList.add('success');
    };
});

// console.log(pContents)

const title = document.querySelector('.title');;

title.classList.toggle('test');
title.classList.toggle('test');