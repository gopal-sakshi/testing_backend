const promise = new Promise((resolve, reject) => {
    reject("fail");
    resolve("success2");
});

promise.then(res => {
    console.log("then1: ", res);
}).then(res => {
    console.log("then2: ", res);
}).catch(err => {
    console.log("catch: ", err);
    return 'jingChak';
}).then(res => {
    console.log("then3: ", res);
});

/************************************************************************* */


// no matter where the catch method is placed, it can catch errors that are not caught by the upper layer.
// catch method will also return a new Promise object, causing the then method after it to be executed as well