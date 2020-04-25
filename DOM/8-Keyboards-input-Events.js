// Create the UI vars
const form = document.querySelector('form');
const taskInput = document.getElementById('task-input');
const heading = document.querySelector('#task-title');

// This will work only with select
// const select = document.querySelector('select');

// Clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown
// taskInput.addEventListener('keydown', runEvent);
// Keyup
// taskInput.addEventListener('keyup', runEvent);
// keypress
// taskInput.addEventListener('keypress', runEvent);
// focus
taskInput.addEventListener('focus', runEvent); // this is when you started to click the inside input
// blue
taskInput.addEventListener('blur', runEvent); // this is when you click outside the input
// Cut
taskInput.addEventListener('cut', runEvent); // this is when you cut all the value in the input - ctrl + x is also counted
// Paste
taskInput.addEventListener('paste', runEvent); // this is when you paste the value in the input - ctrl + v is also counted
// input
taskInput.addEventListener('input', runEvent); // this is when you input anything
// Change - will work only with select
// select.addEventListener('change', runEvent); // This is when you start to select from the dropdown select element




function runEvent (e) {
    console.log(`Event type: ${e.type}`);
    // console.log(e.target.value);


    // displaying the text we type in the heading
    // heading.innerText = e.target.value;

    // get input value
    // console.log(taskInput.value);
    // e.preventDefault();
}