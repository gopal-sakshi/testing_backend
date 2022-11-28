const { default:axios } = require('axios');

(async function testApiEndpoint() {
    const jingChak = await axios.get('http://localhost:3044/stream/endpoint1');
    console.log(jingChak.data);
})();