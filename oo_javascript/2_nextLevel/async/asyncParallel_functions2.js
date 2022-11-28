// make sure, simpleExpress --- backend server is running
var async = require('async');                               // ORRRRRRRRRR import async from 'async';
const { default:axios } = require('axios');

console.time('asyncParallel');
async.parallel([
    function singamalai32 (callback) {

        // APPROACH I =================> we use axios.get().then()              // WORKS
        axios.get('http://localhost:3044/stream/endpoint1').then(res12 => callback(null, res12.data));

        // APPROACH II ================> we use await axios.get()               // DOEST NOT WORK
                                                                                // because await only works inside async() function
                                                                                // but if we make singamalai32() as async(), it throws error
                                                                                // an async function inside async.parallel()
        // const result12 = await axios.get('http://localhost:3044/stream/endpoint1');
        // callback(null, result12.data);

    },
    function singamalai44 (callback) {
        setTimeout(function () {
            callback(null, 'two');
        }, 3000);
    },
    // here, the parameter is called 'abc', not 'callback'
    function (abc) {
        axios.get('https://official-joke-api.appspot.com/random_joke').then(res => {
            console.log(res.data); abc(null, `${res.data.setup}___${res.data.punchline}`)
        });
    },
    (callback) => { axios.get('http://localhost:3044/stream/endpoint2').then(res12 => callback(null, res12.data)); }
], function (err, results) {
    console.timeEnd('asyncParallel');
    console.log(results);
});
/****************************************************************************************************************************/

// Note:
    // all those async functions run parallelly...
    // not one after another
    // its not like 
        // first one API call is made to 'stream/endpoint1'
        // when the 1st API call is done, only then second API call is made to 'stream/endpoint2'
    // all API calls are made parallelly