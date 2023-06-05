/*

# create Promise
var p1 = new Promise((resolve, reject) => { ... })


Promise.all([p1,p2,p3]).then()
Promise.race([p1,p2,p3]).then()
    When we pass multiple promises to the Promise.race method, 
    - it resolves/rejects the first promise that resolves/rejects
    - rest all promises can go to hell


finally block doesn’t receive any value
anything returned from finally is not considered in the then block
then() gets its value from previous then() and not finally() block
any return value in finally() block is ignored

If JS Engine encounters 'await' keyword
    it doesnt wait forever
    it pushes that function after 'await' keyword into microTaskQueue
    ignores all the next lines in that function (or) executionContext
    goes to next task in eventLoop ----> executes all tasks in eventLoop
    now JS Engine goes back to microTaskQueue and calls then/catch of all promises that are resolved
    then proceeds to next/remaining lines of the function which has await keyword

An async function always returns a promise. 
Even if you omit the Promise keyword
    the compiler will wrap your function in an immediately resolved promise.


*/