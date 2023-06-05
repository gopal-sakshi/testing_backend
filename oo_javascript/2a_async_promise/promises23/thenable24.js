const thenable23 = {
    then: function(callback) { setTimeout(() => callback(2), 100); }
};
  
const thenable24 = {
    then(onFulfilled, onRejected) { onFulfilled(44); },
};

(async () => { 
    await thenable23;
    console.log(await thenable24)
})();

/* -----------------------------------------------------------------------------------------------------------

Can we use await only with promises?
(A) No, we can use await with promise as well as any object that implements a then function.

----------------------------------------------------------------------------------------------------------- */