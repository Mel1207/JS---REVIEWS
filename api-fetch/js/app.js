'use strict'

const fetchAPI = async function (height, width) {
    try {
        const getData = await fetch(`https://picsum.photos/id/1/${height}/${width}`);
        const res = await getData.json();

        return res
    } catch (err) {
        throw err
    }
  
}

fetchAPI(100, 200)