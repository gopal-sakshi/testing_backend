var async = require('async');


function test24() {

    var p1 = async.parallel(
        {
            num1: function (callback) { setTimeout(()=>{},100) },
            num2: function (callback) { setTimeout(() => {},100)},
            num3: function (callback) { setTimeout(() => {},100)}
        });
    p1.then(res => {console.log(res)});
}

function printResults(obj) {
    console.log("inside printResults");
    console.log(obj);
}

function doStuff1() {
    setTimeout(() => {
        console.log("do stuff1");
        return 3;
    }, 1000);
}

function doStuff2() {
    setTimeout(() => {
        console.log("do stuff2");
        return 9;
    }, 2000);
}

function doStuff3() {
    setTimeout(() => {
        console.log("do stuff3");
        return 27;
    }, 3000);
}

test24()