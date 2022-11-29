// APPROACH I ==============> this is the way to go
async function res1 () { 
    var result = await doStuff(); 
    return result 
}
(async () => { console.log('result ======> ', (await res1())); })();

// APPROACH II ===============> does NOT work
// var res2 = doStuff();
// console.log('hello doctor ',res2);


// APPROACH III ===============> works
(async () => {
    var res3 = await doStuff();
    console.log('hello doctor ',res3);
})() 
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

// Say fn1() calls fn2() ==============> fn2() calls "async fn3()"
    // we have await statement inside fn3(), because fn3() is await
    // that await will be effective if and only if ======> fn1(), fn2() are also async functions
    // all the parent/caller functions must also be async functions

    // thats why "APPROACH I" is the way to go
    // APPROACH II =====> doStuff() is async fn(), but there is no await
    // ideally it should be ===> await doStuff(); 
        // but await valid only inside async fn() ----> so, you have to wrap "await doStuff()" inside some async fn()