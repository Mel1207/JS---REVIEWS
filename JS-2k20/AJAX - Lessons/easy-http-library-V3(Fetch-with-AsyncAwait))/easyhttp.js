    // EasyHTTP Library
    // library for making http request

    // @version 3.0.0
    // @author Mel John Pualon
    // @liscence MIT


class EasyHTTP {
    // Make an HTTP Get Request
    async get(url) {
        const response = await fetch(url)
        const resData = await response.json();
        return resData;
    }

    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const resData = await response.json();
        return resData;
       
    }

    // Make an HTTP Put Request
    async put(url, data) {
        
        const response = await fetch(url, {
            method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
        })

        const resData = await response.json();
        return resData;
    }

    // Make an HTTP Delete request
    async delete(url) {
        
        const response = await fetch(url, {
            method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
        });
        
        const resData = await 'Resource Deleted';
        return resData;
       
    }
} 

