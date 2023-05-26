const https = require('https');
const url = 'https://jsonplaceholder.typicode.com/todos/1';

async function makeHttps(onComplete) {
    const request = https.request(url, (response) => {
        let data = '';
        response.on('data', (chunk) => { data = data + chunk.toString(); });    
        response.on('end', () => { onComplete(JSON.parse(data)) });
    });
    request.on('error', (error) => { console.log('An error', error); });
    request.end();
}

const fn23 = (retValue) => { console.log(retValue) }
makeHttps(fn23);