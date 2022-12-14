let resolvePromise = new Promise(resolve => {
    let resolvedPromise = Promise.resolve(33);
    resolve(resolvedPromise);                               // resolved with thenable
})

resolvePromise.then(() => {
    console.log('resolvePromise resolved')
})

let resolvedPromiseThen = Promise.resolve().then(res => {
    console.log('promise1')
});

resolvedPromiseThen.then(() => { 
    console.log('promise2') 
}).then(() => {
    console.log('promise3')
});