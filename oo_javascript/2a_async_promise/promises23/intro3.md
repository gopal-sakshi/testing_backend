Once settled, a promise `can not be resettled`. 
    Calling resolve() or reject() again will have no effect. The immutability of a settled promise is an important feature.

Native JavaScript promises don’t expose promise states. 
Only the function responsible for creating the promise will have
- knowledge of the promise status
- access to resolve or reject.


Rules of Promises
- A promise or thenable is an object ====> with .then() method
- A pending promise may transition into a fulfilled or rejected state.
- A fulfilled or rejected promise is settled, and must not transition into any other state.
    pending ----> fulfilled (or) rejected ----> no other state
- Once a promise is settled, it must have a value (which may be undefined). That value must not change.

.then()
- SYNTAX =========>         promise23.then(onFulfilled?: Function, onRejected?: Function) => Promise
- Both onFulfilled() & onRejected() are optional.
- If the arguments supplied are not functions, they must be ignored.
- onFulfilled() will be called after the promise is fulfilled, with the promise’s value as the first argument.
- onRejected() will be called after the promise is rejected, with the reason for rejection as the first argument.
- Neither onFulfilled() nor onRejected() may be called more than once.
- .then() may be called many times on the same promise
- .then() must return a new promise, promise2.
- If onFulfilled() or onRejected() return a value x
    if x is a promise, promise2 will lock in with x. 
    Otherwise, promise2 will be fulfilled with the value of x
- If onFulfilled is not a function & promise1 is fulfilled, 
    promise2 must be fulfilled with the same value as promise1.