// document.querySelector('.clear-task').addEventListener('click', function () {
//     // console.log('task is clear');
// });

document.querySelector('.clear-task').addEventListener('click', onClick);

function onClick (e) {
    // console.log('task is clear');

    let val;

    val = e;

    // Event target element
    val = e.target;
    val = e.target.id; // No output because we dint add an id to our a tag
    val = e.target.className; // output will be all the class inside the a tag in string form
    val = e.target.classList; // output will be DOMtoken list it means all the list of class inside the a tag in [] form

    // Event type
    val = e.type; // output will be click

    // timestamp
    val = e.timeStamp; // output will be the timestamp we click the button

    // Coords even relative to the window
    val = e.clientY; // output will be coordinate inside the button in Y axix
    val = e.clientX; // output will be coordinate inside the button in X axix

    // Coords even relative to the element
    val = e.offsetY;
    val = e.offsetX;

    console.log(val)
}