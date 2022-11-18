var btoa = require('btoa');
var atob = require ('atob');

/** it seems atob & btoa are natively provided in client-side JS; 
 * but in nodeJS, you explicitly need to include them in package.json & npm i to node-modules */
var payload23 = {
    appName: 'INPUTS',
    domain: 'some domain',
    dateRange: '7 days'
}

// APPROACH I ----------> we encode stringified version of payload;
const stringified = JSON.stringify(payload23)
console.log('after stringied ---> ',stringified);
const stringEncoded33 = btoa(stringified);
console.log('result after encoding = ', stringEncoded33);
console.log('after decoding ===>',JSON.parse(atob(stringEncoded33)));
console.log('------------------------------------------ X23 ------------------------------------------');
// APPROACH II --------> 
    // we encode direct payload... we will not stringify payload23 before encode
    // WONT WORK... we simply get [object Object]
const stringEncoded34 = btoa(payload23);
console.log('result after encoding = ', stringEncoded34);       // W29iamVjdCBPYmplY3Rd
console.log('after decoding ===> ',atob(stringEncoded34));
console.log('see this thingyyy ---> ', btoa('[object Object]'));    
// LESSON ------> we didnt encode object.... but we encoded a string which is [object Object]