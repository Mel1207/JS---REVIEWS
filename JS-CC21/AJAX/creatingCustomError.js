// Creating Custom Errors


const getTodos = async() => {
    const response = await fetch('mel.json');

    if(response.status !== 200) {
        throw new Error('Cannot Fetch the data');
    }

    const data = await response.json();

    return data;
};

getTodos()
    .then(data => console.log('resolved: ', data))
    .catch(error => console.log('rejected: ', error.message));

