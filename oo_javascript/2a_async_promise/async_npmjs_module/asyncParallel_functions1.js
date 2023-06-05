var async = require('async');


// it seems 'callback' ---> the parameter that we passed to 3 asychnronous functions
    // singamalai32
    // singamalai44
    // arrowFn
// is part of async.parallel(arr23, cb44)     module
    // arr23 ========> array of asynchronous functions
    // cb44 =========> the callback function to be triggered after all functions in 'arr23' gets executed
async.parallel([
    function singamalai32 (callback) { setTimeout(function () { callback(null, 'one'); }, 5000); },
    function singamalai44 (callback) { setTimeout(function () { callback(null, 'two'); }, 100); },
    (callback) => { setTimeout (function () { callback(null, 'three'); }, 100) }
], function (err, results) { console.log(results); });