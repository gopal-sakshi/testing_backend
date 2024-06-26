let axios = require('axios');
const url = require('url');

let options = {
    url: 'https://api-eu-site-1.xxxxxx/api/v1/oauth/token',
    headers: { 'Content-type': 'application/x-www-form-urlencoded' },
    method: 'POST',
    data: new url.URLSearchParams({
        client_id: '28b45------------d',
        client_secret: '0Axxxxxxxxxxxxxxxxxxxx1',
        grant_type: 'client_credentials'
    }).toString()
}

axios(options)
.then(res => { console.log("res ====> ", res) })
.catch(err => { console.log("err ===> ", err) })