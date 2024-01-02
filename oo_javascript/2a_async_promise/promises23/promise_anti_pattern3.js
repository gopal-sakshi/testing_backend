let p1 = new Promise(resolve => {
    ""();       // deliberately throw error... "" emptyString isnt function; cant invoke
    resolve();
});

(async () => {
    await p1;
})()
.catch(e => console.log("Caught @ p1 " + e));       // make sure that the error is caught

/* ==========================================================  */


let p2 = new Promise(async resolve => {
    try {
        ""();       // deliberately throw error... lets see it error is caught or not
    } catch(e) { }                  // program CRASHESSSSS if u dont use try/catch
    resolve();
});


(async () => {
    await p2;
})().catch(e => console.log("Caught: " + e));   // Doesn't catch it... 



/* ==========================================================  */