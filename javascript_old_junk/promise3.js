/***
 * The methods promise.then(), promise.catch(), promise.finally() = to associate further action with a promise that becomes settled.

    The .then() method takes up to two arguments; 
        the first argument is a callback function for the resolved case of the promise, 
        the second argument is a callback function for the rejected case.
    Each .then() returns a newly generated promise object
    ... it seems that if .then() has 2 arguments, then catch() block for promise rejected case wont be called ... 

    .then() vs .finally()

    a) Sometimes you don't want to catch errors at the place they arise??? 
    b) Sometimes you have to clean something up whether there was an error or not 
        (nulling references, clearing timeouts ... stuff like that). 
        That's where you use finally()
    c) finally(). It will be executed under any circumstance without changing the resolved value.
 * 
 */

var p23 = new Promise((resolve24, reject) => {    
    resolve24();
    // reject();
})


p23.then(() => {
        console.log("promise fulfilled ")
    }, 
    () => {
        console.log("promise failed");
    }).catch(() => {
    console.log("promise failed in catch")
}).finally(() => {
    console.log("I will get executed no matter what...");
})