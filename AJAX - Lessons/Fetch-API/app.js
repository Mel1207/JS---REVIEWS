document.getElementById('button-1').addEventListener('click', getText);
document.getElementById('button-2').addEventListener('click', getJson);
document.getElementById('button-3').addEventListener('click', getExtAPI);

function getText () {
    fetch('test.txt')
    .then(function (res) {
        return res.text();
    })
    .then(function (data) {
        console.log(data)
        document.getElementById('output').innerHTML = data;
    })
    .catch(function (error) {   
        console.log(error);
    })
}

function getJson () {
    fetch('post.json')
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data)
        let output = '';
        data.forEach(function (post) {
            output += `<li>${post.title}<br>
            ${post.body}
            </li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(function (error) {   
        console.log(error);
    })
}

function getExtAPI () {
    fetch('https://api.github.com/users')
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data)
        let output = '';
        data.forEach(function (user) {
            output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(function (error) {   
        console.log(error);
    })
}
