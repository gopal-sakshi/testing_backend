var btoa = require('btoa');
var atob = require ('atob');

/** it seems atob & btoa are natively provided in client-side JS; but in nodeJS, you explicitly need to include them in package.json & npm i to node-modules */
var payload23 = {
    appName: 'INPUTS',
    domain: 'some domain',
    dateRange: '7 days'
}
const string44 = JSON.stringify(payload23)
const encoded33 = btoa(string44);
console.log(encoded33);
decoded33 = atob(encoded33);
console.log(JSON.parse(decoded33));
// console.log(`decoded = ${atob(encoded33)}`);