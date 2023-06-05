let resolvePromise = new Promise(resolve => {
    resolve('non-thenable-object')                          // resolved with non-thenable... 
                                                            // see nonThenable_vs_thenable1.js, its resolved with thenbale
})

resolvePromise.then(() => {
    console.log('resolvePromise resolved')
})

let resolvedPromiseThen = Promise.resolve().then(res => {
    console.log('promise1')
})

resolvedPromiseThen.then(() => {
    console.log('promise2')
}).then(() => {
    console.log('promise3')
})