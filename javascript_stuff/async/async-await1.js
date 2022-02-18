function first() {
    return new Promise( (resolve, reject) => {
        console.log(2);
        resolve(34);
        console.log(4);
    });
}

async function f() {
    console.log(1);
    let r = await first();
    console.log("response of await is "+r);
}

console.log('a');
f();
console.log('b');

/*
    await is asynchronous in async-await, 
    when compiler reach at await it stops executing and push everything into event queue 
    and continue with synchronous code after async function.

*/