var async = require('async');

/***************************************************************************************************/
function doStuff1(cb) {
    setTimeout(() => {
        // console.log("do stuff1");
        cb(null, 3);
    }, 1000);
}

function doStuff2(cb) {
    setTimeout(() => {
        // console.log("do stuff2");
        cb(null, 9);
    }, 2000);
}

function doStuff3(cb) {
    setTimeout(() => {
        // console.log("do stuff3");
        cb(null, 27);
    }, 3000);
}
/***************************************************************************************************/


function test24() {

    var p1 = async.parallel({

            // APPROACH I ---------> not working
            num1: (cb) => doStuff1(cb), num2: (cb23) => doStuff2(cb23), num3: cb33 => doStuff3(cb33)

            // // APPROACH II --------> working
            // num1: function (callback) { setTimeout(function () { callback(null, 1); }, 200); },
            // num2: (callback) => { setTimeout(function () { callback(null, 22); }, 200); },
            // num3: function gasolineFn (callback) { setTimeout(function () { callback(null, 31); }, 200); },

        }, function (err, results) { console.log(results) });
    // p1.then(res => {console.log(`parallelly resolved ==>`,res)});
}

test24();

/*
    
SYNTAX explained

    ----------------------------------------------- anonymous function that takes 1 parameter... which is function_Reference
    function (callback) { 
        setTimeout(function () { 
            callback(null, 1); 
        }, 200); 
    },

    can also be written as ------------------------------ arrow function -------

    (callback) => { 
        setTimeout(function () {  
            callback(null, 1);  
        }, 200); 
    }

    can also be written as ----------------------------- named function... with 'gasolineFn' being the function name --------

    function gasolineFn (callback) { 
        setTimeout(function () { 
            callback(null, 1); 
        }, 200); 
    },


What this function DOES
- It does nothing... 
- may be it calls itself after 200 milliseconds

*/