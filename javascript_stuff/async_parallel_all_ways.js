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
    }
], function (err, results) {
    console.log(results);
    // results is equal to ['one','two'] even though
    // the second function had a shorter timeout.
});

// an example using an object instead of an array
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

//Using Promises
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
    }
]).then(results => {
    console.log(results);
    // results is equal to ['one','two'] even though
    // the second function had a shorter timeout.
}).catch(err => {
    console.log(err);
});

// an example using an object instead of an array
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
}).then(results => {
    console.log(results);
    // results is equal to: { one: 1, two: 2 }
}).catch(err => {
    console.log(err);
});

//Using async/await
async () => {
    try {
        let results = await async.parallel([
            function (callback) {
                setTimeout(function () {
                    callback(null, 'one');
                }, 200);
            },
            function (callback) {
                setTimeout(function () {
                    callback(null, 'two');
                }, 100);
            }
        ]);
        console.log(results);
        // results is equal to ['one','two'] even though
        // the second function had a shorter timeout.
    }
    catch (err) {
        console.log(err);
    }
}

// an example using an object instead of an array
async () => {
    try {
        let results = await async.parallel({
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
        });
        console.log(results);
        // results is equal to: { one: 1, two: 2 }
    }
    catch (err) {
        console.log(err);
    }
}
