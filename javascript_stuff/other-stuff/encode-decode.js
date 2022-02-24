var payload = {
    appName: 'INPUTS',
    domain: 'somedomain.com',
    dateRange: '30 days'
}

const encoded23 = encodeURIComponent(JSON.stringify(payload));
console.log(encoded23);
const decoded23 = decodeURIComponent(encoded23);
console.log(`decoded stuff = ${decoded23}`);

console.log(JSON.parse(decoded23));