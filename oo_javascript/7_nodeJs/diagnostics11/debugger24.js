const express = require('express')
const app = express()
let axios = require('axios');
var server = require('http').createServer(app);
server.listen(process.env.PORT || 12234);
console.log('server running...at 12234');

app.get('/checkapi', async (req, res) => {
    console.log("req method ====> ", req.method);
    debugger
    axios.get('https://official-joke-api.appspot.com/random_joke').then(resp => {
        debugger
        res.status(200).send({
            time23: new Date().toISOString(),
            info23: resp.data 
        });
    });
});



// node --inspect=13332 oo_javascript/7_nodeJs/diagnostics11/debugger24.js
// node --inspect-brk oo_javascript/2_nextLevel/this_summary/1_fn_invoked_from_function_object_class.js