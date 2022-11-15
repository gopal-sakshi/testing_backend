var async = require('async');


async.parallel([
    function (callback) {
        setTimeout(function () {
            callback(null, 'one');
        }, 200);
    },
    function (callback) {
        setTimeout(function () {
            callback(null, 'two');
        }, 100);
    },
    function (abc) {
        setTimeout(function() {
            console.log('hello doctor');                    // it only accepts async functions...
                                                                // SYNTAX  =  addNum(null, data)
            abc('erro12r', 5)
        }, 1000)
    }
]).then(results => {
    console.log(results);
    // results is equal to ['one','two'] even though
    // the second function had a shorter timeout.
}).catch(err => {
    console.log(err);
});