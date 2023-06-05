// make sure, simpleExpress --- backend server is running
var async = require('async');                               // ORRRRRRRRRR import async from 'async';
const { default:axios } = require('axios');

console.time('asyncParallel');
async.parallel([
    (callback) => axios.get('http://localhost:3044/stream/endpoint1').then(res12 => callback(null, res12.data)),
    function singamalai44 (callback) { setTimeout(function () { callback(null, 'two'); }, 3000); },    
    function (abc) { 
        axios.get('https://official-joke-api.appspot.com/random_joke').then(res => {
            console.log(res.data); 
            abc(null, `${res.data.setup}___${res.data.punchline}`)
        });
    },
    (callback) => { axios.get('http://localhost:3044/stream/endpoint2').then(res12 => callback(null, res12.data)); }
], function (err, results) {
    console.timeEnd('asyncParallel');
    console.log(results);
});
/****************************************************************************************************************************/