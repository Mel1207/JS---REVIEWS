// EVENT LISTENER FOR BUTTON 1
document.getElementById('button1').addEventListener('click', loadCustomer);
// EVENT LISTENER FOR BUTTON 2
document.getElementById('button2').addEventListener('click', loadCustomers);

// LOAD CUSTOMER
function loadCustomer (e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customer.json', true);

    xhr.onload = function () {
        if(this.status === 200){
            // First is to pasre the json file and place in a variable
            const customer = JSON.parse(this.responseText);
            const output = `
            <ul>
                <li>ID: ${customer.id}</li>
                <li>NAME: ${customer.name}</li>
                <li>COMPANY: ${customer.company}</li>
                <li>PHONE: ${customer.phone}</li>
            </ul>
            `
            document.getElementById('customer').innerHTML = output
            console.log(this.responseText);
        }
    }


    xhr.send();
}

// LOAD CUSTOMERS
function loadCustomers (e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers.json', true);

    xhr.onload = function () {
        if(this.status === 200){
            // First is to pasre the json file and place in a variable
            const customers = JSON.parse(this.responseText);

            let output = '';

            customers.forEach(function (customer) {
                output += `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>NAME: ${customer.name}</li>
                    <li>COMPANY: ${customer.company}</li>
                    <li>PHONE: ${customer.phone}</li>
                </ul>
                `
            })
            
            document.getElementById('customers').innerHTML = output
            console.log(this.responseText);
        }
    }


    xhr.send();
}