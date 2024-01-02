function fn() {

    return new Promise(async function (resolve, reject) {

        // This handler must be attached before `c` is called
        thing.once('myEvent', function (e) {
            resolve(e.data); // done
        });

        // The order of these functions calls is important,
        // and they may produce errors that need to be handled.
        await a();
        await b();
        await c(); // this causes myEvent

    });

}

/*
    This is promise anti-pattern
    Dont do "await"ing inside Promise constructor
    you should only do the promisification of asynchronous callback 
    https://eslint.org/docs/latest/rules/no-async-promise-executor
    
    Promise constructor anti-pattern
    - using promises inside promise constructor executor function
    - this is 
        new Promise( async (resolve, reject) => {

        })


*/