console.log('start')

setTimeout(() => {
  console.log('setTimeout')
})

Promise.resolve().then(() => {
  console.log('resolve')
})

console.log('end')
/**************************************************************************************************************/

/*
    In what order are these asynchronous callback functions executed?
    - Some might say that whoever finishes first will execute first. 
    - Well, that’s true, but what if two async tasks complete at the same time?

    For example, in the above code
    - the timer of setTimeout is 0 second
    - Promise.resolve() will also return a fulfilled Promise object immediately after execution.

    Both asynchronous tasks are completed immediately, so whose callback function will be executed first?

    In JavaScript EventLoop, there is also the concept of priority.
    - Tasks with higher priority are called microtasks ======> Includes: Promise, ObjectObserver, MutationObserver, process.nextTick, async/await .
    - Tasks with lower priority are called macrotasks =======> Includes: setTimeout , setInterval, XHR


*/