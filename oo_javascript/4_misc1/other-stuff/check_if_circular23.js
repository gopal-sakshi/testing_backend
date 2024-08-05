// need to check if my response from simpleExpress is cicrular in nature

const axios = require("axios");
var url24 = 'http://localhost:3044/otherStuff/cors'

axios({ url: url24, method: 'PUT'})
.then(res => {
    console.log("resp23 ===>", res.data);
    console.log("is stringify possible ===> ", JSON.stringify(res.data))
}).catch(err => console.error("error ===> ", err))