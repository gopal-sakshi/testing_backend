// This is a CALLBACK function... a function which is passed as a parameter
    // When to invoke this function depends on getSumAsync()        // which is a async function for all purposes
const blah23 = (err, result) => { 
    if (err) { return err; } 
    else { return result; }
}


// This is "function definition" of a function that takes another function as a parameter
const getSumAsync = (num1, num2, callback) => { 
    if (!num1 || !num2) { return callback(new Error("Missing arguments"), null); }
    return callback(null, num1 + num2);
}
// This is function invokation... we are invoking (or) calling the function
var result44 = getSumAsync (9, 14, blah23);
console.log(`result of normal callback ===> `, result44);
/*********************************************************************************************************** */

// Promisification ===> conversion of a function that accepts a callback into a function returning a promise.
    // ===============> convert getSumAsync() ---> getSumPromise()
    //           ==>    getSumAsync() = a function that accepts a callback function as parameter
    //           ==>    getSumPromise() = a function that returns a promise



/**************************************************************************************************************/
// Using NodeJs util.promisify
const { promisify } = require('util')
const getSumPromise = promisify(getSumAsync)        // node's promisify ==> took getSumAsync() & returned getSumPromise(); what happened internally we dont know
getSumPromise(16, 6).then(result => {
  console.log(`result of nodeJs promisify ===> `, result)
}).catch(err => {
  console.log(err);
});
/**************************************************************************************************************/

// Using our own promisify

var gopalPromisify = (someFn) => {
    
    // // APPROACH I ============> create a fn23 variable which points to a function and return it
    // var fn23 = function someThing1(...args) {
    //     return new Promise((resolve, reject) => {
    //         // console.log(args);
    //         const output = someFn(...args, (err, result) => { if(err) return err; else return result});            
    //         resolve(output);
    //     });
    // }
    // return fn23;

    // // APPROACH II ==========> return the function directly
    // return function someThing2(...args) {
    //     return new Promise((resolve, reject) => {
    //         // console.log(args);
    //         const output = someFn(...args, (err, result) => { if(err) return err; else return result});
    //         resolve(output);
    //     });
    // }

    // APPROACH III ================> using freeCodeCamp's promisify... https://www.freecodecamp.org/news/write-your-own-promisify-function-from-scratch/
    return (...args) => {
        return new Promise((resolve, reject) => {
            // this is customCallback, that we write...
            function customCallback(err, result) { if (err) { reject(err); } else { resolve(result); } }
            args.push(customCallback);
            console.log(this);                  // this is {}
            someFn.call(this, ...args);         // but why do we need to supply 'this' argument here... what does 'this' point to in this case
        });
    };
} 

const getSumPromise23 = gopalPromisify(getSumAsync);
getSumPromise23(21,34).then(result => {
    console.log(`result of gopalPromisify ===>`, result)
});


// APPROACH IV ======> using David Barral... https://medium.com/trabe/understanding-nodes-promisify-and-callbackify-d2b04efde0e0
    // using curriedFunction syntax thingy...
const davidBarralPromisify = fn => (...args) => new Promise((resolve, reject) => {
    fn(...args, (err, value) => {
        if(err) reject(err); else resolve(value);
    });
});
const getSumPromise24 = davidBarralPromisify(getSumAsync)
getSumPromise24(21, -23).then(result22 => {
    console.log(`result of david barral promisify ===> `, result22);
})

/**************************************************************************************************************/


