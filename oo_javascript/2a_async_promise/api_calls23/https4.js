const https = require('https');
const url = 'https://jsonplaceholder.typicode.com/todos/4';

async function makeHttps(onComplete) {
    return new Promise((resolve, reject) => {
        const request = https.request(url, (response) => {
            let data = '';
            response.on('data', (chunk) => { data = data + chunk.toString(); });    
            response.on('end', () => { resolve(JSON.parse(data)) });
        });
        request.on('error', (error) => { reject(error) });
        request.end();
    });
}

(async () => { 
    const result = await makeHttps();
    console.log(result);
})();