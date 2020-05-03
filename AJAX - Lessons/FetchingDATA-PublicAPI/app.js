document.querySelector('.btn-info').addEventListener('click', getJokes);

function getJokes (e) {
    const number = document.querySelector('#number').value;
    // console.log(number);

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function () {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);

            let output = '';

            if(response.type === 'success') {
                response.value.forEach(function (joke) {
                    output += `<li class="list-group-item border-secondary">${joke.joke}</li>`
                });
            } else {
                output += `<li class="list-group-item">Something went wrong</li>`
            }

            document.querySelector('.Jokes').innerHTML = output;
            console.log(response);
        }
    }


    xhr.send();
    // Trial of function
    // console.log('get jokes');


    e.preventDefault();
}