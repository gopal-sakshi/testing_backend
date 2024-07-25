const axios = require("axios");

let url23 = 'https://api.ipify.org/?format=json';
let url24 = 'http://127.0.0.1:3044/misc22/forward23'
let proxyObj = {
    proxy: {
        protocol: 'http',
        host: '127.0.0.1',
        port: 14590,
        // auth: {
        //     username: 'yasoob',
        //     password: 'p@$$w0Rd'
        // }
    }
}

// axios.get(url24, { proxyObj })
// .then(res => {
//     console.log("ip Addr23 ====> ", res.data)
// }).catch(err => console.error("error ===> ", err))


axios({ url: url24, method: 'GET', proxy: {
    protocol: 'http',
    host: '127.0.0.1',
    port: 14590}})
.then(res => {
    console.log("ip Addr24 ====> ", res.data)
}).catch(err => console.error("error ===> ", err))