const promise = new Promise(res => res(2));

promise.then(v => {
    console.log(v);
    return v * 2;
}).then(v => {
    console.log(v);
    // return v * 2;
    return 44
}).finally(v => {                           // finally block doesn’t receive any value
    console.log(v);                             // anything returned from finally is not considered in the then block
    return v * 2;
}).then(v => {
    console.log(v);                         // then() gets its value from previous then()
});                                             // cause return value in finally() block is ignored