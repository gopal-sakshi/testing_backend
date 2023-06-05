function first() {
    // a promise that always resolves
    console.log('lsdjf');
    return new Promise( (resolve, reject) => {
        console.log(223);
        resolve(34);
        console.log(423);
    });
}

async function f() {
    console.log(1);
    let r2 = await first();
    console.log("response of await is (copy1) "+r2);
    console.log("response of await is (copy2) "+r2);
    console.log("response of await is (copy3) "+r2);
}

console.log('a');
f();
console.log('b');

/*
    we used "await" before first() 
    so, the "three consoles" will not executed until first() promise is resolved
    but ANY SYNCHRONOUS CODE within first() =====> will get processed
    then 3 consoles will be skipped till the promise is resolved
    node encounters & logs 'b'
    now promise is resolved ===> 3 consoles will be logged

*/