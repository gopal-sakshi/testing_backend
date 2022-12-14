# Promise object

`Constructor`
Promise()                       // wrap functions that do not already support promises.


`Static methods`
- Promise.all()
    Fulfills when all of the promises fulfill; rejects when any of the promises rejects.
- Promise.allSettled()
    Fulfills when all promises settle.
- Promise.any()
    Fulfills when any of the promises fulfills; rejects when all of the promises reject.
- Promise.race()
    Settles when any of the promises settles. 
    In other words, fulfills when any of the promises fulfills; rejects when any of the promises rejects.
- Promise.reject()
    Returns a new Promise object that is rejected with the given reason.
- Promise.resolve()
    Returns a new Promise object that is resolved with the given value. 
    If the value is a thenable (ie has a then method), the returned promise will "follow" that thenable, adopting its eventual state; 
    otherwise, the returned promise will be fulfilled with the value.
    Generally, if you don't know if a value is a promise or not, Promise.resolve(value) it instead and work with the return value as a promise.


`Instance methods`
- catch()
- then()
- finally()


