var async = require('async');

function blah() {
        async.parallel({
        one: function (callback) {
            setTimeout(function () {
                callback(null, 1);
            }, 200);
        },
        two: function (callback) {
            setTimeout(function () {
                callback(null, 2);
            }, 100);
        }
    }, function (err, results) {
        console.log(results);
        // results is equal to: { one: 1, two: 2 }
    });
}
blah();