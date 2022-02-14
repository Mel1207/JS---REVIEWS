document.getElementById('button-1').addEventListener('click', getText);
document.getElementById('button-2').addEventListener('click', getJson);
document.getElementById('button-3').addEventListener('click', getExtAPI);

function getText () {
    fetch('test.txt')
    .then(res => res.text())
    .then(data => {
        console.log(data)
        document.getElementById('output').innerHTML = data;
    })
    .catch(error => console.log(error))
}

function getJson () {
    fetch('post.json')
    .then (res => res.json())
    .then(data => {
        console.log(data)
        let output = '';
        data.forEach(post => {
            output += `<li>${post.title}<br>
            ${post.body}
            </li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.log(error))
}

function getExtAPI () {
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let output = '';
        data.forEach(user => {
            output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.log(error))
}
