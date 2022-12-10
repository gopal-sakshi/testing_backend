function first() {
    // a promise that alway resolves
    return new Promise( (resolve, reject) => {
        console.log(223);
        resolve(34);
        console.log(423);
    });
}

async function f() {
    console.log(1);    
    // BAD PRACTICE... see '11.js'
    // dont use 'then' after await first() ====> instead, use just await... result automatically comes in r
    let r1 = await first().then(m => m).catch(rejected => console.log(rejected)).finally(() => 'promise over');
    console.log("response of await is "+r1); 
}

console.log('a');
f();
console.log('b');