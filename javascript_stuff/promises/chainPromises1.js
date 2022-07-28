//var Promise = require("bluebird");

function test1() {
    console.log("RESOLVE + THEN + CATCH + THEN");
    return new Promise((resolve, reject) => resolve())
        .then(() => console.log("then - test1"))
        .catch(err => console.log("error:", err.message))
        .then(() => console.log("end - test1"));
}

function test2() {
    console.log("REJECT + THEN + CATCH + THEN");
    return new Promise((resolve, reject) => reject(new Error("rejected --> test2")))
        .then(() => console.log("then - test2"))
        .catch(err => console.log("error:", err.message))
        .then(() => console.log("end - test2"));
}

function test3() {
    console.log("RESOLVE + THEN + CATCH + FINALLY");
    return new Promise((resolve, reject) => resolve())
        .then(() => console.log("then - test3"))
        .catch(err => console.log("error:", err.message))
        .finally(() => console.log("end - test3"));
}

function test4() {
    console.log("REJECT + THEN + CATCH + FINALLY");
    return new Promise((resolve, reject) => reject(new Error("rejected")))
        .then(() => console.log("then - test4"))
        .catch(err => console.log("error:", err.message))
        .finally(() => console.log("end - test4"));
}

// run tests "sequentially" so console output doesn't get blended
setTimeout(test1, 500);
setTimeout(test2, 1000);
setTimeout(test3, 1500);
setTimeout(test4, 2000);