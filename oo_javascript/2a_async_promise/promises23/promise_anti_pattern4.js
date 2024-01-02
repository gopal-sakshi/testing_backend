/*
    Obviously, we cant declare Promise executor function as async
    so, p1 is WRONG
    preferably, use p2
    but then how do we "use await" inside of Promise executor function
*/


/*  ======================================================================= */
const dummyFnThatReturnsPromise = () => {
    return new Promise((resolve, reject) => {
        if(Date.now() %2 == 0) { resolve ('even babaai'); }
        else { reject('odd time lo msg chesaavu ra'); }
    })
};

// dummyFnThatReturnsPromise().then(data => {
//     console.log('then block ====> ', data)
// }).catch(err => { console.log('catch block =====> ', err); });

/*  ======================================================================== */

let p1 = new Promise( async(resolve, reject) => {
    // WRONG
    // cant make this executor function as async
    // but I want to use "await" inside this executor function
});

let p2 = new Promise( async(resolve, reject) => { 
    try {
        let res1 = await dummyFnThatReturnsPromise();
        console.log('p2 click ayindi ====> ', res1);
    } catch(e) { console.log('p2 phattu ====> but try catch kabatti parle', e); }

});

let p3 = new Promise( (resolve, reject) => { 
    dummyFnThatReturnsPromise().then(data => {
        console.log('p3 then ====> ', data);
    }).catch(err => { console.log('p3 catch ====> ', err); });
});

((async function IIFE23() {
    await p2;
    await p3;
}))();