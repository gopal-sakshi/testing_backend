var async = require('async');

// The Asynchronous Method... 
    // setTimeout() ===> means it will be asynchronous method... 
    // nodeJs control will move forward without waiting
function strictAddition(x, y, callback) {
    var result = x + y;
    setTimeout(function () {
        return callback(null, result);
    }, 4000);
}

// The Callback
// function callback(err, data) {
//     if (err) { return err; }
//     return data
// }

/*********************************************************************************************************/
// APPROACH I
console.log(strictAddition(2, 10, callback));
    // undefined... 
    // because strictAddition() is async; nodeJs control will execute strictAddition() which returns undefined at the moment
    // consider using Promise - async/await ---> to wait for the return value of the strictAddition() method

// APPROACH II 
async.parallel({
        twelve: function singamalai (callback) { strictAddition(2, 10, callback); },
        fiftythree: function (callback) { strictAddition(42, 11, callback); },
        six: (callback) => strictAddition(23, -17, callback),
    },
    function (err, results) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(results); // {twelve: 12, fiftythree: 53, six: 6}
    }
);
/*********************************************************************************************************/

/*
    SYNTAX EXPLAINED
    
    (A) function (callback) { strictAddition(42, 11, callback); }
        - it is a anonymous function. It has no name
        - it takes a single parameter. That parameter is not of type 'number', 'boolean', 'string'
            but the paramter is of type 'function' (ie object) (cause, JS functions are 1st class objects)
        - that parameter is passed onto strictAddition() as another Parameter
            strictAddition() takes 3 parameters ---> number, number, function

    (B) function singamalai (callback) { strictAddition(2, 10, callback); }
        - same as above... execpt this is not an anonymous function... 
        - it has a name 'singamalai'
        - Note: even though it is named... it is pretty useless as its not used anywhere else

    (C) (callback) => strictAddition(23, -17, callback)
        - same as above
        - but the syntax is arrowFn
        - since there is only 1 line in the fn... we omitted 'curly_braces' and 'return_statement'

*/