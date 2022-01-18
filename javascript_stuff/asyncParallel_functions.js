var async = require('async');

async.parallel([
    function (callback) {
        setTimeout(function () {
            callback(null, 'one');
        }, 1000);
    },
    function (callback) {
        setTimeout(function () {
            callback(null, 'two');
        }, 100);
    }
], function (err, results) {
    console.log(results);               // results = [one, two]     even though 2nd function finishes first
});