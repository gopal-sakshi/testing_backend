// All Promise-like objects implement the Thenable interface. 
    // A thenable implements the .then() method, which is called with two callbacks: 
    // one for when the promise is fulfilled, one for when it's rejected. 
// Promises are thenables as well.


// Promise.resolve() will 
    // not only resolve promises
    // but also trace thenables


const aThenable23 = {
    then(onFulfilled, onRejected) {
        onFulfilled(44);
    },
};
    
var blah1 = Promise.resolve(aThenable23);                  
console.log(blah1);                              // Promise { <pending> }
blah1.then(res => console.log(res));            // this line gets executed at the end of eventLoop when all tasks are completed