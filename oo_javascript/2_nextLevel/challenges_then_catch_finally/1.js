const promise = new Promise((resolve, reject) => {
    resolve("success1");                // only resolve('success1') is a valid operation. The last two are invalid.
    reject("fail");
    resolve("success2");
});
  
promise.then(res => {
    console.log("then: ", res);
}).catch(err => {
    console.log("catch: ", err);
});


// The status can only change from pending to fulfilled, or from pending to rejected.
// This change is irreversible. 
// It cannot change from fulfilled to pending, nor from rejected to pending. 
// At the same time, fulfilled cannot become rejected, and rejected cannot become fulfilled.