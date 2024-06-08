const fetch = require('node-fetch');

function fetchData() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

// Example usage:
fetchData()
    .then(data => {
        console.log('Data fetched successfully:');
        console.log(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });