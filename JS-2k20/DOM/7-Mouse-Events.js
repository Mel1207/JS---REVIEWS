const clearBtn = document.querySelector('.clear-task');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);
// Double Click
// clearBtn.addEventListener('dblclick', runEvent);
// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// Mouseup
// clearBtn.addEventListener('mouseup', runEvent);
// Mouse Enter
// card.addEventListener('mouseenter', runEvent);
// // Mouseleave
// card.addEventListener('mouseleave', runEvent);
// // Mouseover
// card.addEventListener('mouseover', runEvent);
// // mouseout
// card.addEventListener('mouseout', runEvent);
// Mousemove
card.addEventListener('mousemove', runEvent); // the output will be counted inside the card element


// Event Handler
function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    // we can also use the mouse event to manipulate some elements
    heading.textContent = `mouse X: ${e.offsetX} Mouse Y: ${e.offsetY}`;

    // we can use the coordinates number to control some of styles inside the dom
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}