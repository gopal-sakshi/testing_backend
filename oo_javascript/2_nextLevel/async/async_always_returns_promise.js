/**
 * An async function always returns a promise. 
 * Even if you omit the Promise keyword, the compiler will wrap your function in an immediately resolved promise.
 * 
 */

 async function foo1() {
    return 34
}

// foo1() is syntactically similar to foo2(); 
// foo1() is async function... it MUST return a promise... so, compiler converts 34 into promise  

function foo2() {
    return Promise.resolve(34)
}

console.log(foo1());
console.log(foo2());
