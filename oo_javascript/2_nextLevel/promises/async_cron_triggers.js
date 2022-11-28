// APPROACH I ==============> this is the way to go
async function res1 () { 
    var result = await doStuff(); 
    return result 
}
(async () => { console.log('result ======> ', (await res1())); })();

// APPROACH II ===============> does NOT work
// var res2 = doStuff();
// console.log('hello doctor ',res2);
/************************************************************************************************************/
async function doStuff() {
    const result = await blahblah();
    return result;
}

function blahblah() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('resolved after some time');
            resolve(33);                                        
        }, 2000)
    })
}
/************************************************************************************************************/