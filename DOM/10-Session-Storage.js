// Set local storage item - data you store will stay even if you end program
// localStorage.setItem('name', 'Mel');
// localStorage.setItem('age', '25');

// Set session storage item - data that you store will only stay when you are not done in your session. but when you close the session the data will also cleared
// sessionStorage.setItem('name', 'John');

// remove from local storage
// localStorage.removeItem('name');

// get from local storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// Clear Local Storage
// localStorage.clear();
// console.log(name, age);

document.querySelector('form').addEventListener('submit', function (e) {
    const task = document.querySelector('#task-input').value;
    
    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    alert('task added');

    console.log(task)

    e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach((task) => {
    console.log(task);
});

