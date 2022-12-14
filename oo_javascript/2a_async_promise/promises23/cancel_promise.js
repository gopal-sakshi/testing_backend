const wait = (time, cancel = Promise.reject()) => new Promise((resolve, reject) => {
    const timer = setTimeout(resolve, time);
    const noop = () => {};  
    cancel.then(() => {
        clearTimeout(timer);
        reject(new Error('Cancelled'));
    }, noop);
});
  
const shouldCancel = Promise.resolve(); // Yes, cancel
// const shouldCancel = Promise.reject(); // No cancel
  
// wait(2000, shouldCancel).then(() => console.log('Hello!'),(e) => console.log(e)); 
wait(2000).then(() => console.log('Hello!'),(e) => console.log(e)); 


// EXPLANATION
    // cancel = Promise.reject() ========> default parameter assignment to tell it not to cancel by default.
    // use the cancel.then() method to handle the cancellation and resource cleanup. 
    // This will only run if the promise gets cancelled before it has a chance to resolve
    // noop =======> no-op, meaning a function that does nothing