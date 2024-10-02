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

/*
    preflighted requests can make RACE conditions
    some comment
        My app was using application/json to make requests to my API but I found a downside to it. The preflighted OPTIONS request is sent in order, but the actual POST/GET/whatever request is sent arbitrarily later after the next requests have been made. So this wrecks a stateful API if you send a POST with application/json before navigating to another page and GETing the same application/json there because the OPTIONS request for the POST will be sent first, then the next GET, then the POST itself.
        For this reason I try to use application/x-www-form-urlencoded as much as possible. Preflighted requests can make race conditions.
    https://dev.to/bcanseco/request-body-encoding-json-x-www-form-urlencoded-ad9
*/

axios(options)
.then(res => { console.log("res ====> ", res) })
.catch(err => { console.log("err ===> ", err) })