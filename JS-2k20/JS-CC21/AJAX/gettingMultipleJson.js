const getTodos = (resource, callBack) => {
    
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {

        if(request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText)
            callBack(undefined, data);
        } else if (request.readyState === 4) {
            callBack('Could not fetch date', undefined);
        }
    });

    request.open('GET', resource);
    request.send();
}


// this is called callback worst(he.l), it means nag nested tayo ng maraming callback sa loob ng call back, ayos lang naman ito, pero mahirap imaintain kapag masyadong marami
// const nito mahirap basahin, and pwede rin bumagal ang system dahil loaded yung callback natin ng isa pang callback etc. kaya dito papasok si promises
// const pa nito, need nyang matapos muna mag fetch yung unang callback bago sumunod yung isang callback
// getTodos('mel.json', (error, data) => {
//     console.log(data);
//     getTodos('juvy.json', (error, data) => {
//         console.log(data);
//         getTodos('john.json', (error, data) => {
//             console.log(data);
//         })
//     });
// });

getTodos('mel.json', (error, data) => {
    console.log(data);
    
    // example scenario if maraming load or mabigat yung data na need iload
    setTimeout(() => {
        getTodos('juvy.json', (error, data) => {
            console.log(data);
            setTimeout(() => {
                getTodos('john.json', (error, data) => {
                    console.log(data);
                })
            }, 3000)
        });
    }, 3000);
});

// one solution for this is promises
