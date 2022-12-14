const promise = Promise.resolve().then(() => {
    return promise;
});
  
promise.catch(console.err);

/***************************************************************************** */


// The value returned by .then or .catch cannot be the promise itself, otherwise, it will cause an infinite loop.
// So the code will throw an exception:
// [TypeError: Chaining cycle detected for promise #<Promise>]

