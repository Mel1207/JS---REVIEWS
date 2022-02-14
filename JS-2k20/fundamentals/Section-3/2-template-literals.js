const name = 'Mel';
const age = '25';
const job = 'UI Engineer';
const city = 'Manila';

// Without template strings - es5
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + ' </li><li>City ' + city + '</li></ul';

html = '<ul>' +
            '<li>Name: ' + name + '</li>' +
            '<li>Age: ' + age + '</li> ' +
            '<li>Job: ' + job + ' </li> ' +
            '<li>City ' + city + '</li> ' + 
        '</ul>';

// With template strings - es6
function greetMe() {
    return `Hello Mr. ${name}`;
}

html = `<ul>
            <li>Name: ${name}</li>
            <li>Age: ${age}</li>
            <li>Job: ${job}</li>
            <li>City: ${city}</li>
            <li> ${2+2}</li>
            <li>${greetMe()}</li>
            <li>${age > 30 ? 'Over Age' : 'Under Age'}</li>
        <ul>`

document.body.innerHTML = html;