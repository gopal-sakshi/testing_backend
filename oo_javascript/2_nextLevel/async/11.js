function first() {
    // a promise that always resolves
    return new Promise( (resolve, reject) => {
        console.log(223);
        resolve(34);
        console.log(423);
    });
}

async function f() {
    console.log(1);
    let r2 = await first();
    console.log("response of await is "+r2);        // response of await is 34 ===> got printed after ====> console.log('b)
                                                        // WHY IS THAT
}

console.log('a');
f();
console.log('b');

/*
    QUESTION:
    a) a got consoled first
    b) execution of f() is started... 1 got printed....
        then, 223, 423 got printed ---> meaning, control went into first()
        execution of f() is not completed... But still, b gets printed first... 


    EXPLANATION:
    - await is asynchronous in async-await, 
    - when compiler reach at await it stops executing and push everything into event queue 
    - and continue with synchronous code after async function.

*/